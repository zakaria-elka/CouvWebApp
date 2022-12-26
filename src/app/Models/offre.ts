import { User } from "./user.model";

export interface Offre {

id:number;
depart:string;
city_adr:string;
arrival:string;
startDate:string;
depart_time:string;
arrival_time:string;
available_seats:number;
price:string;
description:string;
driver:User;





}
