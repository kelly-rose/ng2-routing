import {NgModule} from '@angular/core';
import {AboutComponent} from "./about.component";
import {AboutUserComponent} from "./about-user.component";
import {AboutSectionComponent} from "./about-section.component";
import {UserService} from "../shared/services/user.service";
import {aboutRouting} from "./about.routing";
import {CommonModule} from "@angular/common";
import {AboutResolveService} from "./about-resolve.service";

@NgModule({
  declarations: [
    AboutComponent,
    AboutUserComponent,
    AboutSectionComponent
  ],
  imports: [CommonModule,aboutRouting],
  providers: [UserService,AboutResolveService]
})
export class AboutModule {
}
