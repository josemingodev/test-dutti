import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LayoutsModule} from '../../components/common/layouts/layouts.module';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    LayoutsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexModule,
    ExtendedModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ],
  providers: []
})

export class NoAuthViewsModule {
}
