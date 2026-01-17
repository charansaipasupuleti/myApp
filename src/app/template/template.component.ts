import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'template',
      standalone: true,
      imports:[CommonModule],
      templateUrl: './template.component.html',
      styleUrl: './template.component.css',
})
export class TemplateComponent{
constructor() {
    console.log('Template Component Loaded!');
  }
}