import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

export const routes: Routes = [

// Solo Login en /login
  { path: 'login', component: LoginComponent },

  // Solo Dashboard en /dashboard
  { path: 'dashboard', component: DashboardComponent },

  // Cualquier otra ruta vuelve a /login
  { path: '**', redirectTo: 'login' }
];
