import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Service/auth-service.service';
import { FormGroup,FormControl } from '@angular/forms';
import { User } from '../Models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }

  userinfo:User ;


  RegForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
    firstName:new FormControl(),
    LastName:new FormControl(),
    phone:new FormControl(),
    Cni:new FormControl(),
  })

  ngOnInit(): void {
  }


  RegSubmit(){

    this.authService.UserReg(this.RegForm.controls['firstName'].value,this.RegForm.controls['LastName'].value,
    this.RegForm.controls['phone'].value,this.RegForm.controls['Cni'].value,
    this.RegForm.controls["email"].value,this.RegForm.controls['password'].value)
    .subscribe(res=>{this.userinfo=res})







  }




}
