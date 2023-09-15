import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { ByNamePage } from './pages/by-name-page/by-name-page.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SharedModule } from '../shared/shared.module';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ByNamePage,
    MovieListComponent,
    MoviePageComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, MaterialModule, SharedModule],
})
export class MoviesModule {}
