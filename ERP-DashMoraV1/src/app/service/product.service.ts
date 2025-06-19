import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Estado interno de productos
  private products$ = new BehaviorSubject<Product[]>([
    { id: 1, name: 'Producto A', price: 100, stock: 10, description: 'Descripción A' },
    { id: 2, name: 'Producto B', price: 200, stock: 5,  description: 'Descripción B' }
  ]);

  // Observable publico
  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  addProduct(prod: Omit<Product, 'id'>){
    const current = this.products$.value;
    const newProduct: Product = {
      ...prod, id: current.length ? Math.max(...current.map(p=> p.id))+ 1: 1 };
      this.products$.next([...current, newProduct]);
  }

  updateProduct(updated: Product){
    const list = this.products$.value.map(p=> p.id === updated.id ? updated : p);
    this.products$.next(list);
  }

  deleteProduct(id: number){
    const list = this.products$.value.filter(p=> p.id !== id);
    this.products$.next(list);
  }

}

//BehaviorSubject guarda y emite el array de productos
//Métodos CRUD: getProducts, addProduct, updateProduct, deleteProduct.
