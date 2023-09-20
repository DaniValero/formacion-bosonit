import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { MostPopularPageComponent } from './pages/most-popular-page/most-popular-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';

const routes: Routes = [
  {
    path: "popular",
    component: MostPopularPageComponent
  },
  {
    path: "top-rated",
    component: TopRatedPageComponent
  },
  {
    path: "search/:query",
    component: SearchResultsPageComponent
  },
  {
    path: "serie/:id",
    component: SeriesDetailComponent
  },
  {
    path: "**",
    redirectTo: "popular"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesRoutingModule {}
