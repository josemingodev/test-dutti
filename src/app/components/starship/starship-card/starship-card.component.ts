import {Component, Input, OnInit} from '@angular/core';
import {StarshipModel} from '../../../../model/starship/starship.model';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.css']
})
export class StarshipCardComponent implements OnInit {
  @Input() starship: StarshipModel;
  constructor() {
  }

  ngOnInit() {
    this.getStarshipId();
  }
  getStarshipId() {
    this.starship.id = this.starship.url.split('/').filter(function (item) {
      return item !== '';
    }).slice(-1)[0];
  }
}
