import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class LocalStorageService {
  private storage = localStorage;

  set(key: string, value: any) {
    this.storage.setItem(key, value);
  }

  get(key: string) {
    return this.storage.getItem(key);
  }
}
