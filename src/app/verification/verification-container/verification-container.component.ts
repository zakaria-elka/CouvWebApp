
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebcamImage } from 'ngx-webcam/public_api';
import { MediaServicesService } from 'src/app/Service/media-services.service';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verification-container',
  templateUrl: './verification-container.component.html',
  styleUrls: ['./verification-container.component.css']
})
export class VerificationContainerComponent implements OnInit {
  @Output() VerifStepEvent=new EventEmitter();
  useCamera:boolean=false;
  webcamImage!:WebcamImage;
  snapshotPreview:boolean=false;
  controllsOn:boolean=true;
  verificationStep:number=0;
  code = new FormControl('');
  CarForm=new FormGroup({
    CarBrand:new FormControl(),
    CarModel:new FormControl(),
    CarNum:new FormControl(),
    CarCap:new FormControl()
  })
  log = sessionStorage.getItem('log');
  jlog= JSON.parse(this.log);

  constructor(private mediaServices:MediaServicesService) { }

  ngOnInit(): void {
    if(this.jlog==null){

     window.location.href="/home";

    }else{
    this.stepEvent()
    this.controllsOn=false;
    alert("We send you a code in your phone")
  }

  }
  upload():void{
    this.nextVerif()
    this.useCamera=false;

const arr = this.webcamImage.imageAsDataUrl.split(",");
const bstr = atob(arr[1]);
let n = bstr.length;
const u8arr = new Uint8Array(n);
while (n--) {
  u8arr[n] = bstr.charCodeAt(n);
}
const file: File = new File([u8arr], "this.imageName")
    const fd=new FormData;
    if(this.verificationStep>4){

      fd.append("carreg",file);
      fd.append("userid",this.jlog.id);
      this.mediaServices.uploadCarDoc(fd);

    }else{
    fd.append("personalid",file);
    fd.append("userid",this.jlog.id);
    this.mediaServices.uploadIdentity(fd);
    }

  }

  handleImage(webcamImage:WebcamImage){
    this.snapshotPreview=true;



    this.webcamImage=webcamImage

  }
  toggleSnashotPreview(){
    this.snapshotPreview=!this.snapshotPreview;
  }

  toggleCamera(activate:boolean):void{
    this.useCamera=activate

  }
  toggleUseCamera(){
    this.useCamera=!this.useCamera
  }

  postCardata(){

    this.mediaServices.addCar(this.jlog.id,
    this.CarForm.controls['CarBrand'].value,
    this.CarForm.controls['CarModel'].value,
    this.CarForm.controls['CarNum'].value,
    this.CarForm.controls['CarCap'].value,
    )

  }

  nextVerif(){


    if(this.verificationStep<6){

      if(this.verificationStep==0 ){

      if( this.code.value=="6688"){

       alert("verified")
       this.verificationStep++;
       this.stepEvent()

       }
       else{

        alert("Not verified Retry");

       }


      }else{
        this.verificationStep++;
        this.stepEvent()}




      if(this.verificationStep==1 || this.verificationStep==3 ){

        setTimeout(()=>{

          this.verificationStep++;
          this.stepEvent()

        }, 1500);

       if(this.verificationStep ==3 ){

        setTimeout(()=>{

          if (confirm('You can skip this step if you wont be a driver! Would You skip it?')) {
            window.location.href="/home";

          }

        }, 2100);


       }

        }



      if(this.verificationStep==6){

        setTimeout(()=>{

          window.location.href="/home";

        }, 1500);



          }





   }

  }
  stepEvent(){
    this.snapshotPreview=false


    this.VerifStepEvent.emit(this.verificationStep);

  }

}
