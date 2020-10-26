import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../../material.module';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { ContainerComponent } from './container/container.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
  ContainerComponent,
  ToolbarComponent],
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
