import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from "../auth.service";
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../../css/bootstrap.min.css','../../css/style.css','../../css/animation.min.css'
  ,'../../../../node_modules/font-awesome/css/font-awesome.css','../../css/style.css']
})
export class RegisterComponent implements OnInit {

  public selectedIndex = 0;
  public roles: Array<string> = [
    "NGO",
    "Restaurant",
    "Gated Communities",
    "Function Hall",
    "Others"
  ];

  roleControl = new FormControl(this.roles[this.selectedIndex])

  public registerForm: FormGroup;

  others = false;

  public passwordSecure = true;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private apc: AppComponent
  ) {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.minLength(10)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      role: this.roleControl,
      other_role: [""]
    });    
  }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  private createRegisterForm() {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.minLength(10)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      role: this.roleControl,
      other_role: [""]
    });
  }

  public async onRegister() {
    console.log(this.registerForm.value);
    const result: any = await this.authService.onRegister(this.registerForm.value);
      if(result?.accessToken) {
          localStorage.setItem('token', result.accessToken);
          this.router.navigate(['/home']);
          this.apc.ngOnInit();
      }
    console.log("asas");
    
    /* this.router.navigate(["/auth/login"], {
      transition: { name: "slideLeft", duration: 500 }
    }); */
  }

  public onchange(newRole) {
    console.log(
      newRole
    );
    if(newRole==="Others"){
      this.others=true;
    }
    //this.registerForm.patchValue({role: newRole});
  }

  public onopen() {
    console.log("Drop Down opened.");
  }

  public onclose() {
    console.log("Drop Down closed.");
  }

}
