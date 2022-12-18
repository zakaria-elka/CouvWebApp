import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './communication/vid-call/vid-call.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { RegisterComponent } from './register/register.component';





const routes: Routes = [

{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'offer',component:OfferComponent},
{path:'register',component:RegisterComponent},
{path:"call",component:ChatComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
