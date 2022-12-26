import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }


    Getoffre(city:string,des:string,date:string):Observable<any>{


      return this.http.get<any>("http://localhost:4500/api/offers/search?depart="+city+"&arrival="+des+"&date="+date)

    }

    Addoffre(depart:string,city_adr:string,arrival:string,startDate:string, depart_time:string,
    arrival_time:string, price:string, description:string, available_seats:number,):Observable<any>{

  const data={depart,city_adr,arrival,startDate,depart_time,arrival_time,price,description,available_seats}
      return this.http.post<any>("http://localhost:4500/api/offers/create",data)

    }




}
