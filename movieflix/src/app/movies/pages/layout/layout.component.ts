import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'movies-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.scss'],
})
export class LayoutComponent {
  menuItems: MenuItem[] = [];
  sidebarVisible: boolean = true;
  constructor() {
    this.menuItems = [
      { label: 'Item1' },
      { label: 'item2' },
      { label: 'item3' },
    ];
  }
}
