import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-template',
  imports: [
    CommonModule, 
    MatDialogModule
  ],
  templateUrl: './createTemplate.html',
  styleUrls: ['./createTemplate.css']
})
export class CreateTemplateComponent {
      templateName: string = 'UK-MHRA-01';
  region: string = 'UK';

  onModify() { console.log('Modify clicked'); }
  onSave() { console.log('Save clicked'); }
  onCancel() { console.log('Cancel clicked'); }
}