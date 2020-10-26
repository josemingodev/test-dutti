import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../material.module';
import {FlexModule} from '@angular/flex-layout';
import { StarshipListComponent } from './starship-list/starship-list.component';
import {StarshipCardComponent} from './starship-card/starship-card.component';

@NgModule({
  declarations: [StarshipCardComponent, StarshipListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule
  ],
  exports: []
})
export class StarshipModule { }
