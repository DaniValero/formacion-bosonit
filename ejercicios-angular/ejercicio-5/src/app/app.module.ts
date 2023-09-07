import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './pages/main/main.component';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';
import { ControllerComponent } from './components/controller/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent,
    MainComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
