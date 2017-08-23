import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/user";

@Component({
  selector: 'app-dashboard-users-detail',
  template: `
    <p *ngIf="user">
      {{user.name}}
    </p>
  `,
  styles: []
})
export class DashboardUserDetailsComponent implements OnInit {

  user: User;

  constructor(private router: Router, private route: ActivatedRoute, private service: UserService) {
  }

  ngOnInit() {
    //see video 00:11:11~00:11:50
    this.route.params.forEach(param => {
      console.log(param);
      this.service.getUser(param.username).then(user => this.user = user);
    });
  }
}
