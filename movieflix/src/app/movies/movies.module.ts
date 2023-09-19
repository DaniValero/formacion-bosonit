import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SharedModule } from '../shared/shared.module';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page/top-rated-page.component';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page/now-playing-page.component';
import { MostPopularPage } from './pages/most-popular-page/most-popular-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page/search-results-page.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MostPopularPage,
    MovieListComponent,
    MoviePageComponent,
    TopRatedPageComponent,
    NowPlayingPageComponent,
    SearchResultsPageComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, MaterialModule, SharedModule],
})
export class MoviesModule {}
