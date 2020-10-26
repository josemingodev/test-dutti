import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsSectionComponent } from './starships-section.component';

describe('StarshipsSectionComponent', () => {
  let component: StarshipsSectionComponent;
  let fixture: ComponentFixture<StarshipsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
