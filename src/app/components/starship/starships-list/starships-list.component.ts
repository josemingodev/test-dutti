import {Component, Input, OnInit} from '@angular/core';
import {StarshipModel} from '../../../../model/starship/starship.model';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {
  @Input() starshipsList: StarshipModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
