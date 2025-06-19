import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product.model';
import {Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private svc: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products$ = this.svc.getProducts();
  }

  onAdd(){
    this.router.navigate(['/productos/agregar']);
  }

  onEdit(p: Product){
    this.router.navigate(['/productos/editar', p.id]);
  }

  onDelete(id: number){
    if(confirm('¿Está seguro de eliminar el producto?')){
      this.svc.deleteProduct(id);
    }
  }




}  {

}
