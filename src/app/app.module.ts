import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CardSelectionComponent } from './card-selection/card-selection.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BacklogItemComponent } from './backlog-item/backlog-item.component';

import { AuthService } from './auth.service';
import { SessionService } from './session.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CardSelectionComponent,
    UserProfileComponent,
    BacklogItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
