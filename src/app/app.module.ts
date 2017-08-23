import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutUserComponent } from './about/about-user.component';
import { AboutSectionComponent } from './about/about-section/about-section.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardUsersHomeComponent } from './dashboard/users/dashboard-users-home/dashboard-users-home.component';
import { DashboardUsersDetailComponent } from './dashboard/users/dashboard-users-detail/dashboard-users-detail.component';
import { DashboardUsersComponent } from './dashboard/users/dashboard-users/dashboard-users.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import {appRouting} from "./app.routing";
import {UserService} from "./shared/services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutUserComponent,
    AboutSectionComponent,
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
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
