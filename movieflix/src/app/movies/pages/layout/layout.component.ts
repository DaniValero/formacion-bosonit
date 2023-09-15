import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'movies-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.scss'],
})
export class LayoutComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor() {
  
  }
  ngOnInit(): void {
      this.menuItems = [
        { label: 'Most Popular', routerLink: ['/'] },
        { label: 'Latest', routerLink: ['/latest'] },
        { label: 'By Genre', routerLink: ['/genre'] },
      ];
  }


  searchMovie(searchTerm: string) {

  }
}
