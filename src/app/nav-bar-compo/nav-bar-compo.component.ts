import { Component, OnInit ,  ViewChild} from '@angular/core';
import { window } from 'rxjs';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-nav-bar-compo',
  templateUrl: './nav-bar-compo.component.html',
  styleUrls: ['./nav-bar-compo.component.css']
})


export class NavBarCompoComponent implements OnInit {
  isLog:boolean=false;
  isShown: boolean = false;
  log = sessionStorage.getItem('log');
  jlog= JSON.parse(this.log);

  constructor() { }


  ngOnInit(): void {


    if(this.jlog!=null){

      this.isLog=true;

    }



  }

  public getLoginForm() {

    this.isShown=true;


  }

}
