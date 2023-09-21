import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, switchMap } from 'rxjs';
import { SeriesService } from '../../services/series.service';
import { Genre, Season, SerieDetail } from '../../interfaces/serie-detail.interface';
import { Cast, CastElement } from '../../interfaces/cast.interface';

@Component({
  selector: 'series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss'],
})
export class SeriesDetailComponent implements OnInit {

  public serie?: SerieDetail

  public genres?: Genre[]

  public seasons?: Season[]

  public cast?: Cast


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private seriesService: SeriesService
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          return forkJoin([
            this.seriesService.getSerieById(id),
            this.seriesService.getCastMembers(id)
          ])
        })
      )
      .subscribe(([serie, cast]: [SerieDetail, Cast]) => {
        if (!serie) {
          this.router.navigateByUrl('/series/popular');
        }
        this.serie = serie;
        this.genres = serie.genres;
        this.seasons = serie.seasons;
        this.cast = cast
      });
  }
}
