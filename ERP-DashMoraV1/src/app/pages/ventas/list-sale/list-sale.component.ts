import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleService } from '../../../service/sale.service';
import { Sale } from '../../../models/sale.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.scss']
})
export class ListSaleComponent implements OnInit {
  sales$!: Observable<Sale[]>;

  constructor( private svc: SaleService, private router: Router){}

  ngOnInit() {
      this.sales$ = this.svc.getSales();
  }

  onAdd(){
    this.router.navigate(['/ventas/agregar']);
  }

  onEdit(s: Sale){
    this.router.navigate(['/ventas/editar', s.id]);
  }

  onDelete(id: number){
    if(confirm('Seguro que desea eliminar la ventana')){
      this.svc.deleteSale(id);
    }
  }



}
