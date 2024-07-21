import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from "@angular/core";
import { RouterModule, Router } from '@angular/router';
import { AppService } from "./shared/services/app.service";
import { AuthService } from "./auth/auth.service";
import { HttpLoaderService } from "./shared/services/http-loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./css/bootstrap.min.css',
              './css/style.css',
              '../../node_modules/font-awesome/css/font-awesome.css','./css/animation.min.css']
  })
export class AppComponent  implements OnInit {
  title = 'Kindness Kart';
  user: any;
  userLoggedIn = false;
  isLoading = true;
  collapsed = true;

  constructor(
    private router: Router,
    private _changeDetectionRef: ChangeDetectorRef,
    private appService: AppService,
    private ngZone: NgZone,
    private authService: AuthService,
    public httpLoaderService: HttpLoaderService
  ) {}

  ngOnInit() {

    this.ngZone.run(()=>{
      if(localStorage.hasOwnProperty('user')){
        this.user = JSON.parse(localStorage.getItem('user')!);
      }        
    });

    if(!localStorage.hasOwnProperty('user') && (Object.keys(this.user).length === 0)){
      this.userLoggedIn = false;
    } else {
      this.userLoggedIn = true;
    }

    console.log("----------------------------------------------------");
    console.log(this.user);
    console.log("----------------------------------------------------");

    setTimeout(() => {
      this.isLoading != this.isLoading;
    }, 5000);
  }

  public onLogout() {
    localStorage.clear();
    this.router.navigate(["/"]);
    this.userLoggedIn = false;
  }

  ngAfterViewInit() {
    this._changeDetectionRef.detectChanges();    
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  
}
