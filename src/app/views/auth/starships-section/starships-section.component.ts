import {Component, OnDestroy, OnInit} from '@angular/core';
import {StarshipService} from '../../../../services/starship/starship.service';
import {StarshipModel} from '../../../../model/starship/starship.model';

@Component({
  selector: 'app-starships-section',
  templateUrl: './starships-section.component.html',
  styleUrls: ['./starships-section.component.css']
})
export class StarshipsSectionComponent implements OnInit, OnDestroy {
  private subscriptions = [];
  public starshipsList: StarshipModel[];
  public nextPage: string;
  public previousPage: string;
  public componentLoadComplete: boolean;

  constructor(private starshipsService: StarshipService) {
    this.componentLoadComplete = false;
    this.nextPage = '';
  }

  ngOnInit() {
    this.subscriptions.push(this.starshipsService.getStarships().subscribe(response => {
      this.starshipsList = response.results;
      this.nextPage = response.next;
      this.previousPage = response.previous;
      this.componentLoadComplete = true;
    }));
  }

  nextPageButton(type: string) {
    this.componentLoadComplete = false;
    this.subscriptions.push(this.starshipsService.getPageStarships(type === 'next' ? this.nextPage : this.previousPage)
      .subscribe(response => {
        this.starshipsList = response.results;
        this.nextPage = response.next;
        this.previousPage = response.previous;
        this.componentLoadComplete = true;
      }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
