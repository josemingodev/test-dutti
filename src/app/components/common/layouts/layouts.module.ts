import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../../material.module';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [
  ],
    imports: [
        BrowserModule,
        RouterModule,
        MaterialModule,
        FlexModule,
        ExtendedModule
    ],
  exports: [
  ]
})

export class LayoutsModule {
}
