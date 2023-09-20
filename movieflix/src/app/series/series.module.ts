import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { MostPopularPageComponent } from './pages/most-popular-page/most-popular-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ MostPopularPageComponent, TopRatedPageComponent, SeriesDetailComponent, SearchResultsPageComponent],
  imports: [CommonModule, SeriesRoutingModule, MaterialModule, SharedModule],
})
export class SeriesModule {}
