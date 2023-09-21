import { Component } from '@angular/core';
import { Result, Serie } from '../../interfaces/serie.interface';
import { SeriesService } from '../../services/series.service';
import { PaginatorState } from 'src/app/shared/interfaces/pageEvent.interface';

@Component({
  selector: 'top-rated-page',
  templateUrl: './top-rated-page.component.html',
  styleUrls: ['./top-rated-page.component.scss'],
})
export class TopRatedPageComponent {
  public series: Serie[] = [];
  public allSeries: Result[] = [];
  public rows: number = 20;

  constructor(private seriesService: SeriesService) {}
  ngOnInit(): void {
    this.seriesService.getTopSeries().subscribe((response) => {
      this.allSeries = response;
      this.series = this.allSeries[0].results;
    });
  }

  onPageChange(event: PaginatorState) {
    this.series = this.allSeries[event.page!].results;

    const h2Element = document.getElementById('page-title');

    if (h2Element) {
      h2Element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  }
}
