import { Component, AfterViewInit } from '@angular/core';
import feather from 'feather-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  ngAfterViewInit() {
    feather.replace();
  }

}
