import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-template',
  imports: [
    CommonModule, 
    MatDialogModule,
    FormsModule
  ],
  templateUrl: './createTemplate.html',
  styleUrls: ['./createTemplate.css']
})
export class CreateTemplateComponent {
      templateName: string = 'UK-MHRA-01';
  region: string = 'UK';

  onModify() { 
    console.log('Modify clicked');

   }
  onSave() {
     console.log('Save clicked');
     }

  showStructure:boolean=false;

  onCreateStructure(){
    this.showStructure=true;
  }
  treeData = [
    {
      label: 'Application ID',
      expanded: true,
      children: [
        {
          label: 'Sequence 0001',
          expanded: true,
          children: [
            { label: 'm1', children: [{ label: 'us' }] },
            { label: 'm2', children: [{ label: '23-qos' }, { label: '27-clin-sum' }] },
            { label: 'm3' },
            { label: 'm4' },
            { label: 'm5' },
            { label: 'util' }
          ]
        }
      ]
    }
  ];

}