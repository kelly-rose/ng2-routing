import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  template: `
    <p>
      about-section Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AboutSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
