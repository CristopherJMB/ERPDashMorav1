import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoFormComponent } from './pages/producto-form/producto-form.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { IngresosComponent } from './pages/ingresos/ingresos.component';
import { ListSaleComponent } from './pages/ventas/list-sale/list-sale.component';
import { AddSaleComponent } from './pages/ventas/add-sale/add-sale.component';
import { EditSaleComponent } from './pages/ventas/edit-sale/edit-sale.component';



export const routes: Routes = [

// Solo Login en /login ruta publica
  { path: 'login', component: LoginComponent },

  // Rutas internas con layout compartido
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      //Redirige la raiz al dashboard
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      //dashboard home
      { path: 'dashboard', component: DashboardComponent },

      //Listado de productos
      { path: 'productos', component: ProductosComponent },

      //LIstado de ventas
      { path: 'ventas', component: VentasComponent },

      //Listado de clientes
      { path: 'clientes', component: ClientesComponent },

      //Ingresos
      { path: 'ingresos', component: IngresosComponent} ,

      // Agregar un nuevo producto
      { path: 'productos/agregar', component: ProductoFormComponent},

      //Editar un producto existente por Id
      { path: 'productos/editar/:id', component: ProductoFormComponent},

      { path: 'ventas',         component: ListSaleComponent },
      { path: 'ventas/agregar', component: AddSaleComponent },
      { path: 'ventas/editar/:id', component: EditSaleComponent },

    ]
  },

  //Cualquier otra ruta vuelve al login
  { path: '**', redirectTo: 'login' }
];
