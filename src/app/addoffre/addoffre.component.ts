import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { OffreService } from '../Service/offre.service';

@Component({
  selector: 'app-addoffre',
  templateUrl: './addoffre.component.html',
  styleUrls: ['./addoffre.component.css']
})
export class AddoffreComponent implements OnInit {

  step:number=0;


  addoffForm=new FormGroup({
   depart:new FormControl(),
   adress:new FormControl(),
   des:new FormControl(),
   date:new FormControl(),
   Dtime:new FormControl(),
   Atime:new FormControl(),
   perNumb:new FormControl(),
   price:new FormControl(),
   desc:new FormControl()



  })

  constructor(private offreService:OffreService) { }


  nextstep(){

    this.step++;

  }

  ngOnInit(): void {
  }


  postdata(){

  this.offreService.Addoffre(this.addoffForm.controls['depart'].value,
  this.addoffForm.controls["adress"].value,
  this.addoffForm.controls["des"].value,
  this.addoffForm.controls["date"].value,
  this.addoffForm.controls["Dtime"].value,
  this.addoffForm.controls["Atime"].value,
  this.addoffForm.controls["price"].value,
  this.addoffForm.controls["desc"].value,
  Number(this.addoffForm.controls["perNumb"].value)
  ).subscribe(res=>{
  alert("succes");
  window.location.href="/home"
})


  }

}
