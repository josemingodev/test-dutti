import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutsModule} from '../../components/common/layouts/layouts.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../../material.module';
import { HomeComponent } from './home/home.component';
import { StarshipsSectionComponent } from './starships-section/starships-section.component';


@NgModule({
  declarations: [
  HomeComponent,
  StarshipsSectionComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    LayoutsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})

export class AuthViewsModule {
}
