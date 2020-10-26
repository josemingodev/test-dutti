import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../material.module';
import {FlexModule} from '@angular/flex-layout';
import {StarshipCardComponent} from './starship-card/starship-card.component';
import {StarshipsListComponent} from './starships-list/starships-list.component';


@NgModule({
  declarations: [StarshipCardComponent, StarshipsListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule
  ],
  exports: []
})
export class StarshipModule { }
