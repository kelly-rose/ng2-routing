import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about/about.component';
import { AboutUserComponent } from './about/about-user/about-user.component';
import { AboutSectionComponent } from './about/about-section/about-section.component';
import { ConatactComponent } from './contact/conatact/conatact.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardUsersHomeComponent } from './dashboard/users/dashboard-users-home/dashboard-users-home.component';
import { DashboardUsersDetailComponent } from './dashboard/users/dashboard-users-detail/dashboard-users-detail.component';
import { DashboardUsersComponent } from './dashboard/users/dashboard-users/dashboard-users.component';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutUserComponent,
    AboutSectionComponent,
    ConatactComponent,
    DashboardComponent,
    DashboardUsersHomeComponent,
    DashboardUsersDetailComponent,
    DashboardUsersComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
