import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [AppComponent, LineChartComponent, MainComponent, BarChartComponent],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
