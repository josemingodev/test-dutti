import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlanetModel} from '../../../../model/planet/planet.model';
import {PlanetService} from '../../../../services/planet/planet.service';

@Component({
  selector: 'app-planets-section',
  templateUrl: './planets-section.component.html',
  styleUrls: ['./planets-section.component.css']
})
export class PlanetsSectionComponent implements OnInit, OnDestroy {

  private subscriptions = [];
  public planetsList: PlanetModel[];
  public nextPage: string;
  public previousPage: string;
  public componentLoadComplete: boolean;

  constructor(private planetService: PlanetService) {
    this.componentLoadComplete = false;
    this.nextPage = '';
  }

  ngOnInit() {
    this.subscriptions.push(this.planetService.getPlanets().subscribe(response => {
      this.planetsList = response.results;
      this.nextPage = response.next;
      this.previousPage = response.previous;
      this.componentLoadComplete = true;
    }));
  }

  nextPageButton(type: string) {
    this.componentLoadComplete = false;
    this.subscriptions.push(this.planetService.getPagePlanets(type === 'next' ? this.nextPage : this.previousPage)
      .subscribe(response => {
        this.planetsList = response.results;
        this.nextPage = response.next;
        this.previousPage = response.previous;
        this.componentLoadComplete = true;
      }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
