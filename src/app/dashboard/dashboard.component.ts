import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    
    <div class="jumbotron text-center">
      <h1>Welcome to the Dashboard</h1>
      <a routerLink="/dashboard/users" class="btn btn-lg btn-danger">
        Manage Users
      </a>
    </div>
    
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
