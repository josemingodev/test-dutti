import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loading: Subject<boolean>;
  constructor() {
    this.loading = new Subject<boolean>();
  }
  show() {
    this.loading.next(true);
  }
  hide() {
    this.loading.next(false);
  }
}
