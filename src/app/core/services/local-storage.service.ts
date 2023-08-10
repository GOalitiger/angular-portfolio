import { Injectable } from '@angular/core';
import { storage } from './model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements storage {
  constructor() {}
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  remove(key: string): void {
    localStorage.removeItem(key);
  }
  destroy(): void {
    localStorage.clear();
  }
}
