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

  Nalert: boolean = false;
  RegForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
    firstname:new FormControl(),
    lastname:new FormControl(),
    phone:new FormControl(),
    cni:new FormControl(),
  })

  ngOnInit(): void {
  }


  RegSubmit(){


    this.authService.UserReg( this.RegForm.controls['email'].value,
    this.RegForm.controls['password'].value,
    this.RegForm.controls['firstname'].value,
    this.RegForm.controls['lastname'].value,
    this.RegForm.controls['phone'].value,
    this.RegForm.controls['cni'].value)

    .subscribe(res=>{this.userinfo=res;
    sessionStorage.setItem("log",JSON.stringify(res));
    this.Nalert=true;
  })







  }
  public close(){


    this.Nalert=false;
    window.location.href='/home';

   }



}
