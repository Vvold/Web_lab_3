import { Component } from '@angular/core';
import { LocalStorageService } from "../../localstorage.service";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  form = this.fb.group({
    firstName: [],
    lastName: [],
    email: [],
    password: [],
    birthDate: [],
    sex: [],
  });

  constructor(
    private lsService: LocalStorageService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  onSubmit() {
    this.lsService.set('user', JSON.stringify(this.form.getRawValue()));
    this.lsService.set('todos', JSON.stringify([]));
    this.router.navigate(['todoMain']);
  }
}
