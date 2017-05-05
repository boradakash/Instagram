import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { ChangePasswordComponent } from './user-setting/change-password/change-password.component';
import { OtherDetailsComponent } from './user-setting/other-details/other-details.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserSettingComponent, ChangePasswordComponent, OtherDetailsComponent]
})
export class UserModule { }
