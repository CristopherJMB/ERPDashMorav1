import { Component, AfterViewInit } from '@angular/core';
import feather from 'feather-icons';


@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements AfterViewInit {
  ngAfterViewInit() {
    feather.replace();
  }

}
