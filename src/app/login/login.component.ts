import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from '../Service/auth-service.service';
import { FormGroup,FormControl } from '@angular/forms';
import { User } from '../Models/user.model';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {
  @Input() isShow: boolean = false;
  Nalert: boolean = false;
  Nalert2: boolean = false;
  Nalert3: boolean = false;
  userinfo:User ;


  LogForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),

  })


  constructor(private authService:AuthServiceService) { }

  ngOnInit(){


  }


LogSubmit(){

    this.authService.UserLogin(this.LogForm.controls['email'].value,this.LogForm.controls['password'].value)
    .subscribe(res=>{this.userinfo=res;
      sessionStorage.setItem('log', JSON.stringify(res));
      if(this.userinfo.verificationStep==0){
        this.Nalert=true;
      }})

    //this.Nalert2=true;
    this.isShow=false;
    //window.location.reload();



  }





  public close(){

   this.isShow=false;
   this.Nalert=false;
   window.location.reload();

  }


}
