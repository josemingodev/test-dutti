import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../material.module';
import {FlexModule} from '@angular/flex-layout';
import { StarshipsCardComponent } from './starships-card/starships-card.component';

@NgModule({
  declarations: [StarshipsCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule
  ],
  exports: []
})
export class StarshipModule { }
