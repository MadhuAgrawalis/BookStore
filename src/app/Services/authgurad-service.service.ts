import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguradServiceService {

  constructor() { }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
