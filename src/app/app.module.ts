import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NoAuthViewsModule} from './views/no-auth/no-auth.views.module';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from './components/common/common.module';
import {LoaderService} from './components/common/layouts/loader/loader.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EndpointInterceptor} from '../modules/http/endpoint.interceptor';
import {HeadersInterceptor} from '../modules/http/headers.interceptor';
import {AuthViewsModule} from './views/auth/auth.views.module';

const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: EndpointInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true,
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoAuthViewsModule,
    AuthViewsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    LoaderService,
    ...interceptors],
  bootstrap: [AppComponent]
})
export class AppModule {
}
