import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    RegisterComponent,
  ],
  providers: []
})

export class NoAuthViewsModule {
}
