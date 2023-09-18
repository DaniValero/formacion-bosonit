import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'movies-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.scss'],
})
export class LayoutComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(private router: Router) {
  
  }
  ngOnInit(): void {
      this.menuItems = [
        { label: 'Most Popular', routerLink: ['/'] },
        { label: 'Top Rated', routerLink: ['/movies/top'] },
        { label: 'Now Playing', routerLink: ['/movies/now-playing'] },
      ];
  }

  navigateHome() {
    this.router.navigate(['/'])
  }

  searchMovie(searchTerm: string) {
    
  }
}
