import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    // showError:boolean=false;
    constructor(private router: Router) {}
handleLogin(){
    const isSuccess = true; 

    if (isSuccess) {
        this.router.navigate(['/dashboard']);
    } else {
    //   this.showError = true;
    }

}
}