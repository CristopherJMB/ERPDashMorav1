import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})


export class AddProductComponent implements OnInit {
form!: FormGroup;


constructor(
  private fb: FormBuilder,
  private svc: ProductService,
  private router: Router,

){}

ngOnInit(): void {
  this.form = this.fb.group({
  name: ['', Validators.required],
  price: [0, [Validators.required, Validators.min(0.1)]],
  stock: [0, [Validators.required, Validators.min(0.1)]],
  description: ['']
});

}

onSubmit() {
  if (this.form.valid){
    this.svc.addProduct(this.form.value);
    this.router.navigate(['/productos']);
  }
}

}
