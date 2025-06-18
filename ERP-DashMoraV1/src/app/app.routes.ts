import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [

// Solo Login en /login
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'productos', component: ProductosComponent }
    ]
  },

  { path: '**', redirectTo: 'login' }
];
