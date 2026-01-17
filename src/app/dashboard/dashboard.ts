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
import { CreateTemplateComponent } from "./createTemplate";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
    selector:'app-dashboard',
      standalone: true,
      imports:[CommonModule,MatButtonModule,MatDialogModule],
      templateUrl: './dashboard.html',
      styleUrl: './dashboard.css',
})
export class Dashboard{
    constructor(private dialog: MatDialog,private router: Router) {}
    
   
     openCreatePopup() {
    this.dialog.open(CreateTemplateComponent, {
      width: '850px',
      panelClass: 'custom-modal-container',
      disableClose: true,
    });}
  
    isConfigOpen: boolean = false;
    isDocPrepOpen: boolean = false;

     toggleConfig() {
    this.isConfigOpen = !this.isConfigOpen;
    }
    toggleDocPrep() {
    this.isDocPrepOpen = !this.isDocPrepOpen;
    }
    moveToLogin(){
        this.router.navigate(['']);
    }
}
