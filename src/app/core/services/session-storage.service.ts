import { Injectable } from '@angular/core';
import { storage } from './model';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService implements storage {
  constructor() {}

  getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }
  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }
  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
  destroy(): void {
    sessionStorage.clear();
  }
}
