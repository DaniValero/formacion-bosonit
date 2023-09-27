import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { NavigationService } from '../services/navigation.service';


@Component({
  selector: 'main-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.scss'],
})
export class LayoutComponent{
  public movieItems: MenuItem[] = [];
  public seriesItems: MenuItem[] = [];

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.movieItems = [
      {
        label: 'Most Popular',
        routerLink: ['/movies/popular'],
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
      {
        label: 'Favorites',
        routerLink: ['/movies/favorites'],
        icon: 'bi bi-suit-heart-fill',
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
      {
        label: 'Favorites',
        routerLink: ['/series/favorites'],
        icon: 'bi bi-suit-heart-fill',
      },
    ];
  }

  navigateHome() {
    this.navigationService.navigateHome();
  }

  searchItem(searchTerm: string) {
    // Get the current route from the service
    const currentRoute = this.navigationService.getCurrentRoute();

    // Construct the URL based on the current route
    let redirectRoute = '';
    if (currentRoute === 'movies') {
      redirectRoute = '/movies/search';
    } else if (currentRoute === 'series') {
      redirectRoute = '/series/search';
    } else {
      // Handle other routes or provide a default route
      redirectRoute = '/';
    }

    // Navigate to the constructed URL
    this.router.navigate([redirectRoute, searchTerm]);
  }
}
