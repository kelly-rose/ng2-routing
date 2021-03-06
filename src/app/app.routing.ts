import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {
    path: '',
   component:HomeComponent
  },
  {path:'about',
  loadChildren:'app/about/about.module#AboutModule'}, //Load AboutModule
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
