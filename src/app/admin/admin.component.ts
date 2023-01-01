import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  code = new FormControl('');
  isShown: boolean = false;
  data=[{"id":1,"last_name":"hassan","email":"cbevens0@gmail.com","Cin":"BE33445566"},
  {"id":2,"last_name":"hamid","email":"aternault1@gmail.com","Cin":"AE33445588"},
  {"id":3,"last_name":"Said","email":"jazema2@gmail.com","Cin":"CE33499566"},
  {"id":4,"last_name":"Ahmed","email":"bpotteridge3@gmail.com","Cin":"BE3344006"},
  {"id":5,"last_name":"Reda","email":"vgerler4@gmail.com","Cin":"DE33445566"}]

  public getcode() {

    if(this.code.value=="admin")
    {
      this.isShown = true;
    }





 }

}
