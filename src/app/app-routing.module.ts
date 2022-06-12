import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterModule,
  RouterStateSnapshot,
  Routes,
  UrlTree
} from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./authorization/log-in-page/login.component";
import { MainComponent } from "./main/main.component";
import { SignUpComponent } from "./authorization/sign-up-page/sign-up.component";
import { ProfileComponent } from "./profile/profile.component";
import { AboutComponent } from "./about/about.component";
import { TodoMainComponent } from "./todo-main/pd-main.component";
import { Observable } from "rxjs";
import { LocalStorageService } from "./localstorage.service";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'todoMain',
    component: TodoMainComponent,
  },
  {
    path: '',
    component: MainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
