import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SaleService } from '../../../service/sale.service';
import { Router } from '@angular/router';
import { Client, Sale } from '../../../models/sale.model';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-add-sale',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss']
})

export class AddSaleComponent implements OnInit {
  form!: FormGroup;
  clients: Client[] = [];
  products: Product[] = [];

  constructor(
    private fb: FormBuilder,
    private saleService: SaleService,
    public router: Router
  ) {}

  ngOnInit(): void {

    // Inicializar formulario dentro de ngOnInit
    this.form = this.fb.group({
      clientId: [null, Validators.required],
      productIds: [[], Validators.required]
    });

    // Cargar datos de clientes y productos
    this.saleService.getClients().subscribe(c => this.clients = c);
    this.saleService.getProducts().subscribe(p => this.products = p);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const clientId: number = this.form.value.clientId;
    const productIds: number[] = this.form.value.productIds;

    const selectedClient = this.clients.find(c => c.id === clientId)!;
    const selectedProducts = this.products.filter(p => productIds.includes(p.id));

    const total = selectedProducts.reduce((sum, p) => sum + p.price, 0);

    const newSale: Omit<Sale, 'id'> = {
      client: selectedClient,
      date: new Date(),
      total,
      products: selectedProducts
    };

    this.saleService.addSale(newSale as Sale);
    this.router.navigate(['/ventas']);
  }

  // Método para cancelar y volver al listado
  cancel(): void {
    this.router.navigate(['/ventas']);
  }
}
