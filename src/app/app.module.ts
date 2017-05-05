import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardSearchComponent } from './component/dashboard/dashboard-search/dashboard-search.component';
import { FeedTripsComponent } from './component/dashboard/feed-trips/feed-trips.component';
import { TrendingTripsComponent } from './component/dashboard/trending-trips/trending-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardSearchComponent,
    FeedTripsComponent,
    TrendingTripsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
