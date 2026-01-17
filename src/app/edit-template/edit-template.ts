import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-template',
  imports: [CommonModule],
  templateUrl: './edit-template.html',
  styleUrl: './edit-template.css',
})
export class EditTemplate {
 constructor(private router: Router) {}
  
    isConfigOpen: boolean = false;
    isDocPrepOpen: boolean = false;
    isGeneralOpen:boolean = false;
    isVarOpen:boolean = false;
    isCommentsOpen:boolean = false;

    
     toggleConfig() {
    this.isConfigOpen = !this.isConfigOpen;
    }
    toggleDocPrep() {
    this.isDocPrepOpen = !this.isDocPrepOpen;
    }
    moveToLogin(){
        this.router.navigate(['']);
    }
       toggleGeneral() {
    this.isGeneralOpen = !this.isGeneralOpen;
    }
     toggleVar() {
    this.isVarOpen = !this.isVarOpen;
    }
     toggleComments() {
    this.isCommentsOpen = !this.isCommentsOpen;
    }
}
