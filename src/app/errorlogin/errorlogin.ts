import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './errorlogin.html',
  styleUrl: './errorlogin.css'
})
export class ErrorLoginComponent {
    showError:boolean=true;
    constructor(private router: Router) {}
handleLogin(){
        this.router.navigate(['/dashboard']);
    } 
    handleError(){
          this.showError = true;
    }

}
