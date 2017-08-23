import {Component, OnInit} from '@angular/core';
import {User} from "../shared/models/user";
import {UserService} from "../shared/services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  styles: [`
    .profile-card {
      background: #f3f3f3;
      border-radius: 4px;
      padding: 30px;
      text-align: center;
    }

    .profile-card img {
      max-width: 50%;
      margin: 15px auto;
    }
  `],
  template: `
    <div class="row">

      <div class="col-sm-4" *ngFor="let user of users">
        <div class="profile-card">
          <img [routerLink]="['/about',user.username]" [src]="user.avatar" class="img-responsive img-circle">
          <h2>{{ user.name }}</h2>
          <p><a href="https://twitter.com/{{user.username}}">{{ user.username }}</a></p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent implements OnInit {
  users: User[];

  constructor(private service: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.service.getUsers().then(users=>this.users=users);

    this.route.data.forEach((data:{users:User[]}) => {
      console.log(data);
      this.users = data.users;
    });
  }

}
