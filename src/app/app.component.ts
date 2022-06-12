import { Component } from '@angular/core';
import { LocalStorageService } from "./localstorage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private lsService: LocalStorageService
  ) {

    if (
      !Object.keys(JSON.parse(this.lsService.get('user') || '{}')).length &&
      !JSON.parse(this.lsService.get('todos') || '[]').length
    ) {
      this.lsService.set('user', '{}');
      this.lsService.set('todos', '[]');
    }
  }

}
