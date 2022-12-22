import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-verificatio-nbar',
  templateUrl: './verificatio-nbar.component.html',
  styleUrls: ['./verificatio-nbar.component.css']
})
export class VerificatioNbarComponent implements OnInit {
  
@Input() verifStep:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
