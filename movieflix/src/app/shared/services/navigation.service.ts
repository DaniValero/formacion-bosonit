import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private currentRoute: string = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url.split('/')[1];
      }
    });
  }

  navigateHome() {
    this.router.navigate(['/']);
  }

  getCurrentRoute(): string {
    return this.currentRoute;
  }
}
