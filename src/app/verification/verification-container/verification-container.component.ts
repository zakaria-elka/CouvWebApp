
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebcamImage } from 'ngx-webcam/public_api';
import { MediaServicesService } from 'src/app/Service/media-services.service';
import { FormControl } from '@angular/forms';

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

  constructor(private mediaServices:MediaServicesService) { }

  ngOnInit(): void {
    this.stepEvent()
    this.controllsOn=false;

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
    fd.append("personalid",file);
    fd.append("userid","1");
    this.mediaServices.uploadIdentity(fd);


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
  nextVerif(){
    // 0 verify phone n , 1 upload docum , 2 wait, 3 upload docum, 4 wait , 5 done


    if(this.verificationStep<=5){

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

        }

      if(this.verificationStep==5){

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
