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


  UserReg(firstName:string,LastName:string,phone:string,email:string,Cni:string,password:string):
  Observable<any>{

    const data={firstName,LastName,phone,email,Cni,password}
    return this.http.post<any>("http://localhost:4500/api/auth/user/signup",data)

  }



}
