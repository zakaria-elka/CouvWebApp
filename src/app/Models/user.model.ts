import { Car } from "./car";

export interface User {
  id:number;
  email:string;
  firstname:string;
  verificationStep:number;
  phone:string;
  password:string;
  lastname:string;
  personalIdConfirmed:boolean;
  carRegConfirmed:boolean;
  personalIdCard:Array<any>;
  carReg:Array<any>;
  profilePic:Array<any>;
  cin:string;
  emailVerified:boolean;
  phoneNumberVerified:boolean;
  car:Car;


}
