import { Component, OnInit} from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { User } from '../Models/user.model';
import { ActivatedRoute } from '@angular/router';
import { OffreService } from '../Service/offre.service';
import { Offre } from '../Models/offre';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  city:string;
  des:string;
  date:string;
  offer!:Offre[];
  offredetails:Offre;

  constructor(private route: ActivatedRoute,private offreSer:OffreService) { }

  ngOnInit(): void {

    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.city = params.city;
      this.des = params.des;
      this.date=params.date;
    });


   this.offreSer.Getoffre(this.city,this.des,this.date).subscribe(res=>{
    this.offer=res;
    ;console.log(this.offer)})

  }


  getdetaills(data:Offre){

    this.offredetails=data;

  }

}
