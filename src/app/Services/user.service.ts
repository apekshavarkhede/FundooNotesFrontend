import { Injectable } from '@angular/core';
import { HttpService } from '../Services/http.service'
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { log } from 'util';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService, ) { }

  register(user: any) {
    return this.http.post('/register', user, null)
  }

  login(user: any) {
    return this.http.post('/login', user, null)
  }

  forgetPassword(user: any) {
    return this.http.post('/forgetPassword', user, null)
  }

  changePassword(user: any, headers: HttpHeaders) {
    return this.http.post('/changePassword', user, headers)
  }

  getAllUsers() {
    return this.http.getAll('/getAllUsers')
  }




}
