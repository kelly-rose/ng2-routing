import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardUsersHomeComponent } from './dashboard/users/dashboard-users-home/dashboard-users-home.component';
import { DashboardUsersDetailComponent } from './dashboard/users/dashboard-users-detail/dashboard-users-detail.component';
import { DashboardUsersComponent } from './dashboard/users/dashboard-users/dashboard-users.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import {appRouting} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardUsersHomeComponent,
    DashboardUsersDetailComponent,
    DashboardUsersComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
