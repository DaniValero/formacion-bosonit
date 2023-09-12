import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CountryData } from 'src/app/interfaces/data.interface';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent implements OnInit{
  public labels: string[] = []

  public casesPerOneMillion: number[] = []
  public recoveredPerOneMillion: number[] = []

  constructor(private dataService: DataService) { 

  }
  ngOnInit(): void {
    this.dataService.getCountriesInfo().subscribe((data) => {

      const cleanData = data
      
      cleanData.forEach((e: CountryData) => {
        this.casesPerOneMillion.push(e.casesPerOneMillion);
        this.recoveredPerOneMillion.push(e.recoveredPerOneMillion)
      });
      
      
      this.barChartData.datasets[0].data = this.casesPerOneMillion
      this.barChartData.datasets[1].data = this.recoveredPerOneMillion

      this.chart?.update()
    });
  }


  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 100000,
        max: 800000
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: ['Spain', 'Ukraine', 'Italy', 'Greece', 'UK', 'Austria'],
    datasets: [
      { data: [], label: 'Cases per million' },
      { data: [], label: 'Recovered per million' },
    ],
  };
}
