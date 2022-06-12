import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProfileComponent } from "./profile/profile.component";
import { SignUpComponent } from "./authorization/sign-up-page/sign-up.component";
import { LoginComponent } from "./authorization/log-in-page/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { MainComponent } from "./main/main.component";
import { AboutComponent } from "./about/about.component";
import { TodoMainComponent } from "./todo-main/pd-main.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignUpComponent,
    LoginComponent,
    MainComponent,
    AboutComponent,
    TodoMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
