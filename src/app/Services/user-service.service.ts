import { Injectable } from '@angular/core';
import {HttpServiceService} from '../Services/http-service.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  token: any
  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem('token')
   }
   registerUserService(reqPayload: any) {
    console.log(reqPayload);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',

      })

    }
    return this.httpService.postService('registration', reqPayload, true, headers)
  }

  loginUserService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // Authorization: this.token
      })
    }
    return this.httpService.postService('login', reqData, true, headers)
  }
  
  adminregistrationService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // 'x-access-token': this.token,
      })
    }
    return this.httpService.postService('admin/registration', reqData, true, headers)
  }
  adminLoginService(reqData:any){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // Authorization: this.token
      })
    }
    return this.httpService.postService('admin/login', reqData, true, headers)

  }
}
