import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(
    private router: Router
  ) {
  }

  public redirectToLogIn() {
    this.router.navigate(['login'])
  }
  public redirectToSignUp() {
    this.router.navigate(['signup'])
  }
}
