import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/user";

@Component({
  selector: 'app-dashboard-users-detail',
  template: `
    <div class="jumbotron">
      <div *ngIf="user">
        <h2>{{ user.name }}</h2>
        <div class="form-group">
          <input type="text" [(ngModel)]="editName" class="form-control">
        </div>
        <div class="form-group text-center">
          <button (click)="cancel()" class="btn btn-danger">Cancel</button>
          <button (click)="save()" class="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardUserDetailsComponent implements OnInit {

  user: User;
  editName: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: UserService) {
  }

  ngOnInit() {
    //see video 00:11:11~00:11:50
    this.route.params.forEach(param => {
      console.log(param);
      this.service.getUser(param.username).then(user => {
        this.user     = user;
        this.editName = user.name;
      });
    });
  }
  cancel(){
    this.router.navigate(['/dashboard/users']);
  }
  save(){
    this.user.name = this.editName;
    this.router.navigate(['/dashboard/users']);
  }
}
