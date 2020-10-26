import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsCardComponent } from './starships-card.component';

describe('StarshipsCardComponent', () => {
  let component: StarshipsCardComponent;
  let fixture: ComponentFixture<StarshipsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
