import { Routes } from '@angular/router';
import { LoginComponent } from './login.component'; 
import { Dashboard } from './dashboard/dashboard';
import { EditTemplate } from './edit-template/edit-template';
import { ErrorLoginComponent } from './errorlogin/errorlogin';
export const routes: Routes = [
  { path: '', component: LoginComponent },  
  { path: 'dashboard', component: Dashboard } ,
  {path:'edit-template', component:EditTemplate},
  {path:'errorlogin', component:ErrorLoginComponent},

];