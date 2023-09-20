import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'main-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.scss'],
})
export class LayoutComponent implements OnInit {
  public movieItems: MenuItem[] = [];
  public seriesItems: MenuItem[] = [];

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.movieItems = [
      {
        label: 'Most Popular',
        routerLink: ['/'],
        icon: 'bi-fire',
      },
      {
        label: 'Top Rated',
        routerLink: ['/movies/top'],
        icon: 'bi-trophy-fill',
      },
      {
        label: 'Now Playing',
        routerLink: ['/movies/now-playing'],
        icon: 'bi-ticket-perforated-fill',
      },
    ];

    this.seriesItems = [
      {
        label: 'Most Popular',
        routerLink: ['/series/popular'],
        icon: 'bi-fire',
      },
      {
        label: 'Top Rated',
        routerLink: ['/series/top'],
        icon: 'bi-trophy-fill',
      },
    ];
  }

  navigateHome() {
    this.router.navigate([`/`]);
  }

  searchMovie(searchTerm: string) {
    this.router.navigate([`/movies/search/${searchTerm}`]);
  }

  onMenuItemClick(item: MenuItem) {
    console.log(`Clicked on menu item: ${item.label}`);
  }
}
