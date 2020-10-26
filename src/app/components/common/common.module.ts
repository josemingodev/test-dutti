import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material.module';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {LayoutsModule} from './layouts/layouts.module';
import {BasicDialogComponent} from './basic-dialog/basic-dialog.component';

@NgModule({
  declarations: [
    BasicDialogComponent
  ],
  imports: [
    FlexModule,
    MaterialModule,
    ExtendedModule,
    LayoutsModule
  ],
  exports: [
    BrowserModule,
    RouterModule,
    MaterialModule,
  ],
  entryComponents: [BasicDialogComponent]
})
export class CommonModule { }
