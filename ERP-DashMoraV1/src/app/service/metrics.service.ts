import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from '../models/product.model';
//import { Client, Sale } from '../models/sale.model';

export interface Client {id: number, name: string, email: string, phone: string, address: string}
export interface Sale {id: number, client: Client, date: Date, total: number, products: Product[]}

@Injectable({
  providedIn: 'root'
})

export class MetricsService {
//Datos simulados para clientes y ventas
  private clients: Client[] = [
    { id: 1, name: 'Cliente 1', email: 'cliente1@example.com', phone: '1234567890', address: 'Dirección 1' },
    { id: 2, name: 'Cliente 2', email: 'cliente2@example.com', phone: '0987654321', address: 'Dirección 2' },
  ];

  private sales: Sale[] = [
    { id: 1, client: this.clients[0], date: new Date(), total: 100, products: [] },
    { id: 2, client: this.clients[1], date: new Date(), total: 200, products: [] },
  ];

  constructor( private productSvc: ProductService) {}

  //Total de productos

  getTotalProducts(): Observable<number> {
    return new Observable(sub => {
      this.productSvc.getProducts().subscribe(list => {
        sub.next(list.length);
        sub.complete();
      });
    });

  }

  // Total de ventas (suma total)
  getTotalSales(): Observable<number> {
    const totalVentas = this.sales.reduce((sum, s) => sum + s.total, 0);
    return of(totalVentas);
  }

  // total de clients
  getTotalClients(): Observable<number> {
    return of(this.clients.length);
  }

  //total ingresso
  getTotalIncome(): Observable<number> {
    return this.getTotalSales();
  }


}


