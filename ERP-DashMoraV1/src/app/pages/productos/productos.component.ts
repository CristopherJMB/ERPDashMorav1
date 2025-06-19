import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

export class ProductosComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(
    private service: ProductService,
    private router: Router
  ){}

  ngOnInit(){
      this.products$ = this.service.getProducts();
  }

  onAdd(){
    this.router.navigate(['/productos/agregar']);
  }

  onEdit(p: Product){
    this.router.navigate(['/productos/editar', p.id]);
  }

  onDelete(id:number){
    if(confirm('¿Está seguro de eliminar el producto?')){
      this.service.deleteProduct(id);
    }
  }

}

//products$: observable que emite la lista
//onAdd, onEdit, onDelete: manejadores para navegar o eliminar
