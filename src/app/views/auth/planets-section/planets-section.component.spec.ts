import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsSectionComponent } from './planets-section.component';

describe('PlanetsSectionComponent', () => {
  let component: PlanetsSectionComponent;
  let fixture: ComponentFixture<PlanetsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
