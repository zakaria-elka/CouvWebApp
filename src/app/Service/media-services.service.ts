import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaServicesService {

  constructor(private http:HttpClient) { }

  uploadIdentity(form:FormData){
    this.http.post<any>("http://localhost:4500/api/account/personalId/upload",form).subscribe((data)=>{
      console.log(data)
    })
  }

  uploadCarDoc(form:FormData){
    this.http.post<any>("http://localhost:4500/api/account/carregistration/upload",form).subscribe((data)=>{
      console.log(data)
    })
  }

  addCar(userid:number,brand:string,model:string,num_ero:string,capacity:string){

    const data={userid,brand,model,num_ero,capacity}
    this.http.post<any>("http://localhost:4500/api/account/add/car",data).subscribe((data)=>{
      console.log(data)
    })
  }



}
