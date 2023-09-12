
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
})
export class LineChartComponent implements OnInit {
  public last10DaysCases?: number[] = [];
  public last10daysLabels?: string[] = [];
  public last10daysDeaths?: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getLastDaysInfo().subscribe((data) => {
      const cleanData = Object.entries(Object.entries(data)[0][1]).slice(-10);
      const cleanData2 = Object.entries(Object.entries(data)[1][1]).slice(-10);

      cleanData.forEach((e) => {
        this.last10DaysCases?.push(e[1] as number);
        this.lineChartData.datasets[0].data.push(e[1] as number);
        this.last10daysLabels?.push(e[0]);
        this.lineChartData.datasets[1].data.push();
      });

      cleanData2.forEach((e) => {
        this.last10daysDeaths?.push(e[1] as number);
        this.lineChartData.datasets[1].data.push(e[1] as number);
      });

      this.chart?.update();
    });
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'COVID Cases (total to date)',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [],
        label: 'Deaths',
        yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: this.last10daysLabels,
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      y: {
        position: 'left',
        min: 600000000,
        max: 700000000,
      },
      y1: {
        position: 'right',
        min: 6800000,
        grid: {
          color: 'rgba(255,0,0,0.3)',
        }
      }
    },

    plugins: {
      legend: { display: true },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
}
