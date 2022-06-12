import { Component } from '@angular/core';
import { LocalStorageService } from "../../localstorage.service";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    email: [],
    password: [],
  });

  constructor(
    private lsService: LocalStorageService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  onSubmit() {
    const user = JSON.parse(this.lsService.get('user') || '{}');
    const { email, password } = this.form.getRawValue();

    if (email === user?.email && password === user?.password) {
      this.router.navigate(['todoMain']);

    } else {
      alert('Wrong credentials');
    }
  }
}
