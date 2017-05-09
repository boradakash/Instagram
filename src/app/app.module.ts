//core angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'
import 'hammerjs';
//third-party modules
import {SharedModule} from './shared/index'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule,MdCardModule,MdIconModule,MdToolbarModule,MdTooltipModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



//components
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardSearchComponent } from './component/dashboard/dashboard-search/dashboard-search.component';
import { FeedTripsComponent } from './component/dashboard/feed-trips/feed-trips.component';
import { TrendingTripsComponent } from './component/dashboard/trending-trips/trending-trips.component';
import { UserComponent } from './component/user/user.component';
import { TripsComponent } from './component/trips/trips.component';
import { NavComponent } from './component/nav/nav.component';
import { TripListItemComponent } from './shared/trips/trip-list-item/trip-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardSearchComponent,
    FeedTripsComponent,
    TrendingTripsComponent,
    UserComponent,
    TripsComponent,
    NavComponent,
    TripListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdCardModule,
    MdIconModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdTooltipModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
