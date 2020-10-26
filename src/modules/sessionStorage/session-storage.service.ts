import {Injectable} from '@angular/core';

@Injectable()

export class SessionStorageService {

  constructor() {
  }

  set(key: string, data: any): void {
    try {
      sessionStorage.setItem(key, data);
    } catch (e) {
      console.error('Error saving session variable', e);
      return null;
    }
  }

  get(key: string) {
    try {
      if (sessionStorage.getItem(key) !== null) {
        return sessionStorage.getItem(key);
      } else {
        return null;
      }
    } catch (e) {
      console.error('Error getting session variable', e);
      return null;
    }
  }

  delete(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (e) {
      console.error('Error al deleting session variable', e);
      return null;
    }
  }
}
