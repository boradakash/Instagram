import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTripsComponent } from './feed-trips.component';

describe('FeedTripsComponent', () => {
  let component: FeedTripsComponent;
  let fixture: ComponentFixture<FeedTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
