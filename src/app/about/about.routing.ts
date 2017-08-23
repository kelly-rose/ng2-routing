import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from "./about.component";
import {AboutUserComponent} from "./about-user.component";
import {AboutSectionComponent} from "./about-section.component";
import {AboutResolveService} from "./about-resolve.service";

const aboutRoutes: Routes = [
  {
    path: '', //important!!! Keep blank.
    component: AboutSectionComponent,
    children: [
      {
        path: '',
        component: AboutComponent,
        resolve:{
          users:AboutResolveService
        }
      },
      {
        path: ':username',
        component: AboutUserComponent
      }
    ]
  }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
