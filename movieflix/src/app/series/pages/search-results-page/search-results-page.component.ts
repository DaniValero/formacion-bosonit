import { Component } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../../interfaces/serie.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
})
export class SearchResultsPageComponent {
  public series: Serie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ query }) => {
          return this.seriesService.searchSeriesByName(query);
        })
      )
      .subscribe((serie) => (this.series = serie.results));
  }
}
