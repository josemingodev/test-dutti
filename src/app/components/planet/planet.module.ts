import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../material.module';
import {FlexModule} from '@angular/flex-layout';
import { PlanetCardComponent } from './planet-card/planet-card.component';

@NgModule({
  declarations: [PlanetCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule
  ],
  exports: []
})
export class PlanetModule { }
