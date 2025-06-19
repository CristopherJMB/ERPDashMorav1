import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoFormComponent } from './pages/producto-form/producto-form.component';

export const routes: Routes = [

// Solo Login en /login
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'productos/agregar', component: ProductoFormComponent},
      { path: 'productos/editar/:id', component: ProductoFormComponent},

    ]
  },

  { path: '**', redirectTo: 'login' }
];
