import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './communication/vid-call/vid-call.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { RegisterComponent } from './register/register.component';
import { VerificationContainerComponent } from './verification/verification-container/verification-container.component';
import { AddoffreComponent } from './addoffre/addoffre.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [

{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'offer',component:OfferComponent},
{path:'register',component:RegisterComponent},
{path:"call",component:ChatComponent},
{path:"verification",component:VerificationContainerComponent},
{path:"addoffre",component:AddoffreComponent},
{path:"admin",component:AdminComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
