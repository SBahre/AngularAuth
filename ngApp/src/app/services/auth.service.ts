import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:3000/api/register";
  private loginUrl = "http://localhost:3000/api/login";
  constructor(private http:HttpClient) { }

  registerUser(user:any){
    let result= this.http.post<any>(this.registerUrl, user);
    return lastValueFrom(result);
  }

  loginUser(user:any){
    let result= this.http.post<any>(this.loginUrl, user);
    return lastValueFrom(result);
  }


  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
