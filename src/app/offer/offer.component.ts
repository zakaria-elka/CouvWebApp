import { Component, OnInit} from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { User } from '../Models/user.model';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {



  }

  counter(i: number) {


    return new Array(i);
}

}
