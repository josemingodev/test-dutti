import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NoAuthViewsModule} from './views/no-auth/no-auth.views.module';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoAuthViewsModule,
        MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
