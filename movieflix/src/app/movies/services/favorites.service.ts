import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesKey = 'favorites';

  getFavorites(): number[] {
    const favoritesStr = localStorage.getItem(this.favoritesKey);
    return favoritesStr ? JSON.parse(favoritesStr) : [];
  }

  addToFavorites(movieId: number): void {
    const favorites = this.getFavorites();
    if (!favorites.includes(movieId)) {
      favorites.push(movieId);
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }

  removeFromFavorites(movieId: number): void {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(movieId);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }
}
