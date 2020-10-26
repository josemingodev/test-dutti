import {Component, Input, OnInit} from '@angular/core';
import {PlanetModel} from '../../../../model/planet/planet.model';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit {
  @Input() planet: PlanetModel;
  constructor() {
  }

  ngOnInit() {
    this.getPlanetId();
  }
  getPlanetId() {
    this.planet.id = this.planet.url.split('/').filter(function (item) {
      return item !== '';
    }).slice(-1)[0];
  }
}
