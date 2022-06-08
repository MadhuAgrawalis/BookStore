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
     
    });

    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
     
     // service: ['advance']
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
    if (this.loginForm.valid) {
      
      this.userservice.loginUserService(reqData).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('token',response.result.accessToken);
       }, (error: any) => {
        console.log(error);
       })
    }
    this.router.navigateByUrl('/dashbord/getallbook')
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
        
          this.userservice.registerUserService(reqData).subscribe((response: any) => {
            console.log(response);
          }, (error: any) => {
            console.log(error);
          })
        } 
      }
    }
  


