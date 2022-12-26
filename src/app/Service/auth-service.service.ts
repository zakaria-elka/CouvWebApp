import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  UserLogin(email:string,password:string):Observable<any>{

    const data={email,password}
    return this.http.post<any>("http://localhost:4500/api/auth/user/login",data)

  }


  UserReg(email:string,password:string,firstname:string,lastname:string,phoneNumber:string,cni:string):
  Observable<any>{

    const data={email,password,firstname,lastname,phoneNumber,cni}
    return this.http.post<any>("http://localhost:4500/api/auth/user/signup",data)

  }





}
