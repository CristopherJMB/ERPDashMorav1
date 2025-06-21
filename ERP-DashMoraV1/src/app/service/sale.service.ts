import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Sale, Client } from './metrics.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class SaleService {

  private clients: Client[] = [
    { id: 1, name: 'Cliente 1', email: 'cliente1@example.com', phone: '123456789', address: 'Calle Principal 123' },
    { id: 2, name: 'Cliente 2', email: 'cliente2@example.com', phone: '987654321', address: 'Avenida Central 456' },
    { id: 3, name: 'Cliente 3', email: 'cliente3@example.com', phone: '555555555', address: 'Calle Secundaria 789' },
    { id: 4, name: 'Cliente 4', email: 'cliente4@example.com', phone: '111111111', address: 'Avenida Principal 321' },
    { id: 5, name: 'Cliente 5', email: 'cliente5@example.com', phone: '999999999', address: 'Calle Secundaria 654' }
    ];

  private products: Product[] = [
    { id: 1, name: 'Producto 1', price: 10.99, description: 'Descripción del producto 1', stock: 100 },
    { id: 2, name: 'Producto 2', price: 15.99, description: 'Descripción del producto 2', stock: 50 },
    { id: 3, name: 'Producto 3', price: 20.99, description: 'Descripción del producto 3', stock: 75 },
    { id: 4, name: 'Producto 4', price: 25.99, description: 'Descripción del producto 4', stock: 30 },
    { id: 5, name: 'Producto 5', price: 30.99, description: 'Descripción del producto 5', stock: 60 }
  ];

private sale$ = new BehaviorSubject<Sale[]>([
  { id: 1, client: this.clients[0], date: new Date(), total: 10.99, products: [this.products[0], this.products[1]] }
]);

getSales(): Observable<Sale[]> {
  return this.sale$.asObservable();
}

addSale(sale: Omit <Sale, 'id'>){
  const current = this.sale$.value;
  const next: Sale = {
    ...sale,
    id: current.length ? Math.max(...current.map(s => s.id)) + 1 : 1
    };
    this.sale$.next([...current, next]);
}

updateSale(updated: Sale){
  const list = this.sale$.value.map(s => s.id === updated.id ? updated: s);
  this.sale$.next(list);
}

deleteSale(id: number){
  const list = this.sale$.value.filter(s => s.id !== id);
  this.sale$.next(list);
}

getClients(): Observable<Client[]> {
  return of(this.clients);
}

getProducts(): Observable<Product[]> {
  return of(this.products);
}

}
