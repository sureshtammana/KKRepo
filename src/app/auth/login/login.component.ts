import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from "../auth.service";
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../css/bootstrap.min.css','../../css/style.css','../../css/animation.min.css'
  ,'../../../../node_modules/font-awesome/css/font-awesome.css','../../css/style.css']
})
export class LoginComponent implements OnInit {

  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  public selectedIndex = 0;
  public roles: Array<string> = [
    "NGO",
    "Restaurant",
    "Gated Communities",
    "Function Hall",
    "Others"
  ];

  public loginForm: FormGroup;
  public isLoading = true;

  emailControl = new FormControl("", [Validators.required, Validators.pattern(this.emailRegx)]);
  passwordControl = new FormControl("", [Validators.required, Validators.minLength(6)])
  roleControl = new FormControl(this.roles[this.selectedIndex])

  public passwordSecure = true;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private apc: AppComponent
  ) {
    this.loginForm = this.fb.group({
      
      email: this.emailControl,
      password: this.passwordControl,
      role: this.roleControl
    });

  }

  ngOnInit(): void {
    this.createLoginForm();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }

  private createLoginForm() {
    this.loginForm = this.fb.group({
      // email: ["restaurant@gmail.com", [Validators.required, Validators.email]],
      // password: ["rest", [Validators.required, Validators.minLength(2)]],  
      
      // email: ["ngo@gmail.com", [Validators.required, Validators.email]],
      // password: ["ngo", [Validators.required, Validators.minLength(2)]],  
      
      email: this.emailControl,
      password: this.passwordControl,
      role: this.roleControl
    });
 
  }

  public async onLogin() {
    const result: any = await this.authService.onLogin(this.loginForm.value);
    if (result?.accessToken) {
      // localStorage.setItem('token', result.accessToken);
      console.log("rounting to home")
      localStorage.setItem("token", result.accessToken);
      this.router.navigate(["/home"]);
      this.apc.ngOnInit();
    }
  }
  
  public onchange(newRole) {
    console.log(newRole)
    //this.loginForm.patchValue({role: newRole});
  }

  public onopen() {
    console.log("Drop Down opened.");
  }

  public onclose() {
    console.log("Drop Down closed.");
  }

}
