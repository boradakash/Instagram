import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsDetailComponent } from './trips-detail/trips-detail.component';
import { TripsEditComponent } from './trips-edit/trips-edit.component';

@NgModule({
  imports: [
    CommonModule,
    TripsRoutingModule
  ],
  declarations: [TripsDetailComponent, TripsEditComponent]
})
export class TripsModule { }
