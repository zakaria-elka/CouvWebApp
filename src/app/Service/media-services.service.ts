import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaServicesService {

  constructor(private http:HttpClient) { }

  uploadIdentity(form:FormData){
    this.http.post<any>("http://localhost:4443/api/account/personalId/upload",form).subscribe((data)=>{
      console.log(data)
    })
  }


  
}
