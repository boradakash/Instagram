import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserMediaComponent } from './user-media/user-media.component';
import { UserTripsComponent } from './user-trips/user-trips.component';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { UserFollowingComponent } from './user-following/user-following.component';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ],
  declarations: [UserMediaComponent, UserTripsComponent, UserFollowersComponent, UserFollowingComponent]
})
export class UserProfileModule { }
