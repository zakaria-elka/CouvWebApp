import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarCompoComponent } from './nav-bar-compo/nav-bar-compo.component';
import { DriveSearchComponent } from './drive-search/drive-search.component';
import { HttpClientModule } from '@angular/common/http';
import { OfferComponent } from './offer/offer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './communication/vid-call/vid-call.component';
import { CameraComponent } from './camera/camera.component';
import { WebcamModule } from 'ngx-webcam';
import { VerificatioNbarComponent } from './verification/verificatio-nbar/verificatio-nbar.component';
import { VerificationContainerComponent } from './verification/verification-container/verification-container.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarCompoComponent,
    DriveSearchComponent,
    OfferComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    CameraComponent,
    VerificatioNbarComponent,
    VerificationContainerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebcamModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
