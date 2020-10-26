import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material.module';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {LayoutsModule} from './layouts/layouts.module';
import {BasicDialogComponent} from './basic-dialog/basic-dialog.component';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
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
  entryComponents: [ErrorDialogComponent, BasicDialogComponent]
})
export class CommonModule { }
