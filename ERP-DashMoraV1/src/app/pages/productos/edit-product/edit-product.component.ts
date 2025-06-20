import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { List } from 'lucide-react';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  form!: FormGroup;


  private productId!: number

  constructor(
    private fb: FormBuilder,
    private svc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
     this.form = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.1)]],
      stock: [0, [Validators.required, Validators.min(0.1)]],
      description: ['']
    });


      //Leer el parametro 'id' de la ruta
      this.route.params.subscribe(params => {
        this.productId = +params['id'];
        //Cargar el producto existente
        this.svc.getProducts().subscribe(list => {
          const prod = list.find(p => p.id === this.productId);
          if (prod) {
            this.form.patchValue(prod);
          } else{
            //SI no existe, redirigir al listado
            this.router.navigate(['/productos']);
          }
        })
      })
  }

  onSubmit() {
    if (this.form.invalid){
      return;
    }
    // En vez de addProduct, llamamos a updateProduct
    const updated: Product = { id: this.productId,
      ...this.form.value};

    this.svc.updateProduct(updated);
      this.router.navigate(['/productos']);

  }

}
