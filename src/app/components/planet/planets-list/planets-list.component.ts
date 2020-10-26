import {Component, Input, OnInit} from '@angular/core';
import {PlanetModel} from '../../../../model/planet/planet.model';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  @Input() planetsList: PlanetModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
