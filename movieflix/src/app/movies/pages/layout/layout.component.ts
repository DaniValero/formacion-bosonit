import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'movies-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.scss'],
})
export class LayoutComponent implements OnInit {;

  public menuItems: MenuItem[] = [];

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.menuItems = [
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
  }

  navigateHome() {
    this.router.navigate([`/`]);
  }

  searchMovie(searchTerm: string) {
    this.router.navigate([`/movies/search/${searchTerm}`]);
  }
}
