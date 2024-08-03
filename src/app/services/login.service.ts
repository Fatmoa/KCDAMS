import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginAPI = environment.baseUrl +"login-auth/"
  constructor(private http:HttpClient) { }

  userRegistration(body:any){
    return this.http.post(this.loginAPI + "registration",body)
  }

  getLogin(username:any,password:any){
    return this.http.get(this.loginAPI + "getAllUsers")
  }

  getUser(){
    return this.http.get(this.loginAPI + "getAllUsers")
  }
}
