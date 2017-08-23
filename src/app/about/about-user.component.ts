import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {User} from "../shared/models/user";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-about-user',
  template: `
    <a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a>
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
  user:User;
  constructor(private router:Router,private route:ActivatedRoute,private service:UserService) { }

  ngOnInit() {
  //grab the current username
  // const username= this.route.snapshot.params['username'];
  //
  // this.service.getUser(username).then(user=> this.user = user);
  // }

    this.route.data.forEach((data:{user:User}) => {
      console.log(data);
      this.user = data.user;
    });
  }

  goBack(){
   // window.history.back();
    this.router.navigate(['/about']);
  }

}
