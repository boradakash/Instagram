import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTripsComponent } from './trending-trips.component';

describe('TrendingTripsComponent', () => {
  let component: TrendingTripsComponent;
  let fixture: ComponentFixture<TrendingTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
