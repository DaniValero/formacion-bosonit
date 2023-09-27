import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private _favoriteMovies = 'favoriteMovies';
  private _favoriteSeries = 'favoriteSeries';

  getFavoriteMovies(): number[] {
    const favoritesStr = localStorage.getItem(this._favoriteMovies);
    return favoritesStr ? JSON.parse(favoritesStr) : [];
  }

  addToFavoriteMovies(movieId: number): void {
    const favorites = this.getFavoriteMovies();
    if (!favorites.includes(movieId)) {
      favorites.push(movieId);
      localStorage.setItem(this._favoriteMovies, JSON.stringify(favorites));
    }
  }

  removeFromFavoriteMovies(movieId: number): void {
    const favorites = this.getFavoriteMovies();
    const index = favorites.indexOf(movieId);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem(this._favoriteMovies, JSON.stringify(favorites));
    }
  }

  getFavoriteSeries(): number[] {
    const favoritesStr = localStorage.getItem(this._favoriteSeries);
    return favoritesStr ? JSON.parse(favoritesStr) : [];
  }

  addToFavoriteSeries(serieId: number): void {
    const favorites = this.getFavoriteSeries();
    if (!favorites.includes(serieId)) {
      favorites.push(serieId);
      localStorage.setItem(this._favoriteSeries, JSON.stringify(favorites));
    }
  }

  removeFromFavoriteSeries(serieId: number): void {
    const favorites = this.getFavoriteMovies();
    const index = favorites.indexOf(serieId);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem(this._favoriteSeries, JSON.stringify(favorites));
    }
  }
}
