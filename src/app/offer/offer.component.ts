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

  offer!:Offre[];
  offredetails:Offre;

  constructor(private route: ActivatedRoute,private offreSer:OffreService) { }

  ngOnInit(): void {

    this.route.queryParams
    .subscribe(params => {
      console.log(params);

      this.offreSer.Getoffre(params.depart,params.arrival,params.date).subscribe(res=>{
        console.log(res)
        this.offer=res;
    })
    });





  }


  getdetaills(data:Offre){

    this.offredetails=data;

  }

}
