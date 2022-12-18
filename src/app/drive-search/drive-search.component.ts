import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';




@Component({
  selector: 'app-drive-search',
  templateUrl: './drive-search.component.html',
  styleUrls: ['./drive-search.component.css']
})


export class DriveSearchComponent  {

  constructor() { }


  offreForm=new FormGroup({
  city:new FormControl(''),
  dest:new FormControl(''),
  date:new FormControl(new Date()),
});

offerSubmit(){

  console.log(this.offreForm.value);


}



}