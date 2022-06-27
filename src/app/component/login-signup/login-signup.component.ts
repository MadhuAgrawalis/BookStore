import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  submitted = false;
  hide: boolean = true;

  constructor(private router: Router, private formBuilder: FormBuilder, private userservice: UserServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {


    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required ]],
      selectedValue: ['', [Validators.required]],
     
    });

    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      selectedValue: ['', [Validators.required]],
      service: ['advance']
    });
  }
  get f() { return this.loginForm.controls; }   
  onLogin() {
    this.submitted = true;
    let reqData = {

      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log(this.loginForm.value);
    if (this.loginForm.valid) 
    {
      if(this.loginForm.value.selectedValue=="User"){
        console.log("valid");
        console.log("User");
      this.userservice.loginUserService(reqData).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('token',response.result.accessToken);
        this.router.navigateByUrl('/dashbord/getallbook') 
      }, (error: any) => {
        console.log(error);
       })
    }else if(this.loginForm.value.selectedValue=="Admin"){
      this.userservice.adminLoginService(reqData).subscribe((result:any)=>{
        console.log(result);
        localStorage.setItem('token',result.result.accessToken)
      })
    this.router.navigateByUrl('/dashbord/admin')
  }
    
};
  
}
 
    onSignup() {
      this.submitted = true
      let reqData = {
       
        fullName: this.signupForm.value.fullName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        phone: this.signupForm.value.mobileNumber
      }
      console.log(this.signupForm.value);
      if (this.signupForm.valid) {
        if (this.signupForm.value.selectedValue == 'User') {
          console.log("user");
          console.log("valid");
          this.userservice.registerUserService(reqData).subscribe((response: any) => {
            console.log(response);
          }, (error: any) => {
            console.log(error);
          })
        } 
        else if (this.signupForm.value.selectedValue == 'Admin') {
          console.log("admin");
          this.userservice.adminregistrationService(reqData).subscribe((response:any) => {
            console.log(response);
  
          })
        }
      }
      else {
        console.log("invalid");
  
      }
    }
  
  }

