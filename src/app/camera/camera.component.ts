import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { WebcamImage } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-image';
import { WebcamInitError } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-init-error';
import { WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
 
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  @Output() getPicture=new EventEmitter<WebcamImage>()

  constructor() { }
  isCameraExist=false
  showWebcam=true
  errors:WebcamInitError[]=[]

  private trigger:Subject<void>=new Subject<void>();
  private nextWebcam:Subject<boolean|string>=new Subject<boolean|string>();


  ngOnInit(): void {
     WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices:MediaDeviceInfo[])=>{
        this.isCameraExist=mediaDevices&&mediaDevices.length>0;
      }
     )
    
    
  }
  takeSnapshot():void{
    this.trigger.next();

  }
  onOffWebCam(){
    this.showWebcam=!this.showWebcam;

  }
  handleInitError(error:WebcamInitError){
    this.errors.push(error)

  }
  changeWebcam(directionOrDeviceId:boolean|string){
    this.nextWebcam.next(directionOrDeviceId);
  }
  handleImage(webcamImage:WebcamImage){
    this.getPicture.emit(webcamImage);
    this.showWebcam=false

  }
  get triggerObservable():Observable<void>{
    return this.trigger.asObservable();

  }
  get nextWebcamObservable():Observable<boolean | string>{
    return this.nextWebcam.asObservable();
  }

}
