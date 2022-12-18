import { LoginComponent } from "../login/login.component";

export interface User {
  id:number;
  email:string;
  firstName:string;
  verificationStep:number;
  phoneNumber:string;
  password:string;
  lastName:string;
  personalIdConfirmed:boolean;
  carRegConfirmed:boolean;
  personalIdCard:Array<any>;
  carReg:Array<any>;
  profilePic:Array<any>;
  cin:string;
  emailVerified:boolean;
  phoneNumberVerified:boolean;



}
