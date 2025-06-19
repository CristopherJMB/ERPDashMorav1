import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],

  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})

export class ProductoFormComponent implements OnInit {
  form!: FormGroup;
  editing = false;
  productId?: number;

  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['0', [Validators.required, Validators.min(0.1)]],
      stock: ['0', [Validators.required, Validators.min(0.1)]],
      description: ['']
    });

    //Detectar modo de edicion

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.editing = true;
        this.productId = +params['id'];
        this.service.getProducts().subscribe(list => {
          const prod = list.find(p => p.id === this.productId);
          if (prod) {
            this.form.patchValue(prod);
          }
        });
      }
    });
  }

onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value as Omit<Product, 'id'>;
    if (this.editing && this.productId != null) {
      this.service.updateProduct({ id: this.productId, ...data });
    } else {
      this.service.addProduct(data);
    }
    this.router.navigate(['/productos']);
  }

  // Método adicional para cancelar y navegar
  cancel(): void {
    this.router.navigate(['/productos']);
  }
}


