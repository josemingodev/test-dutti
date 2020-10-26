import {NgModule} from '@angular/core';
import {SessionStorageService} from './session-storage.service';

@NgModule({
  providers: [
    SessionStorageService
  ]
})

export class SessionStorageModule {
}

