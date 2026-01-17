// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   imports: [],
//   templateUrl: './dashboard.html',
//   styleUrl: './dashboard.css',
// })
// export class Dashboard {

// }
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-dashboard',
      standalone: true,
      imports:[CommonModule],
      templateUrl: './dashboard.html',
      styleUrl: './dashboard.css',
})
export class Dashboard{
constructor() {
    console.log('Dashboard Component Loaded!');
  }
    isConfigOpen: boolean = false;
    isDocPrepOpen: boolean = false;
     toggleConfig() {
    this.isConfigOpen = !this.isConfigOpen;
  }
    toggleDocPrep() {
    this.isDocPrepOpen = !this.isDocPrepOpen;
  }
}
