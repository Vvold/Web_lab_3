import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { LocalStorageService } from "../localstorage.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user = JSON.parse(this.lsService.get('user') || '{}');

  constructor(
    private router: Router,
    private lsService: LocalStorageService
  ) {
  }

  redirectToMain() {
    this.router.navigate(['todoMain']);
  }
}
