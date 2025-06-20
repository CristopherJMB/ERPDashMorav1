import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import feather from 'feather-icons';


@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {
  ngAfterViewInit() {
    feather.replace();
  }

}
