import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { API_URL } from "../app.constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn = new BehaviorSubject<any>(null);
  currentUser = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    return Boolean(token);
  }

  async onLogin(params: any) {
    // const result = await this.http.post('http://192.168.0.46:3000/login',params).toPromise();
    const result = await this.http.post(API_URL + "/auth/login", params).toPromise();
	if(typeof result !== "undefined"){
		if (typeof result["user"] !== "undefined"){
			localStorage.setItem("user", JSON.stringify(result["user"]));
			this.currentUser.next(result["user"]);
			this.userLoggedIn.next(true);


			//console.log(result["accessToken"])

			return {
			  accessToken: result["accessToken"]
			};
		};
	};
	
	return {
	  accessToken: null
	};	
	
  }
  async onRegister(params: any) {
    const result = await this.http.post(API_URL + "/auth/register", params).toPromise();
	if(typeof result !== "undefined"){
		if (typeof result["user"] !== "undefined"){
			localStorage.setItem("user", JSON.stringify(result["user"]));
			this.currentUser.next(result["user"]);
			this.userLoggedIn.next(true);
			return {
			  accessToken: result["accessToken"]
			};
		};
	};
	
	return {
	  accessToken: null
	};	
	
  }
}
