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
    isGeneralOpen:boolean = true;
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
    this.isVarOpen = false;
    this.isCommentsOpen = false;
    }
     toggleVar() {
    this.isVarOpen = !this.isVarOpen;
    this.isGeneralOpen = false;
    this.isCommentsOpen = false;
    }
     toggleComments() {
    this.isCommentsOpen = !this.isCommentsOpen;
    this.isGeneralOpen = false;
        this.isVarOpen = false;
    }
    goToDashboard(){
         this.router.navigate(['/dashboard']);
    }
}
