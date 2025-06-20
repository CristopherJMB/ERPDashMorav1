import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../../service/metrics.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalProducts =0;
  totalSales = 0;
  totalClients = 0;
  totalIncome = 0;

  constructor(private metrics : MetricsService){}

   ngOnInit(){
    this.metrics.getTotalProducts().subscribe(n => this.totalProducts =n);
    this.metrics.getTotalSales().subscribe(n => this.totalSales =n);
    this.metrics.getTotalClients().subscribe(n => this.totalClients =n);
    this.metrics.getTotalIncome().subscribe(n => this.totalIncome =n);
   }

   //Obtenemos del servicio y los asignamos a propiedades.

}
