import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../shared/models/user";
const users: User[] = [
  {
    id: 1,
    name: 'Chris',
    username: 'sevilayha',
    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'
  },
  {
    id: 3,
    name: 'Holly',
    username: 'hollylawly',
    avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg'
  }
];
@Component({
  selector: 'app-about-user',
  template: `
    <div class="jumbotron text-center" *ngIf="user">
      <h1>{{ user.name }} ({{ user.username }})</h1>
      <img [src]="user.avatar" class="img-responsive img-circle">
    </div>
  `,
  styles: [`
    img     {
      max-width: 300px;
      margin: 20px auto;
    }
  `]
})
export class AboutUserComponent implements OnInit {
  user;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  //grab the current username
  const username= this.route.snapshot.params['username'];
  this.user = users.find(user=>{
   return user.username ===username;
  });
  // console.log(username);
  }

}
