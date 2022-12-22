import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-verif-step-icon',
  templateUrl: './verif-step-icon.component.html',
  styleUrls: ['./verif-step-icon.component.css']
})
export class VerifStepIconComponent implements OnInit {
  verificationStep:number=3;
  @Input() verifStep:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
