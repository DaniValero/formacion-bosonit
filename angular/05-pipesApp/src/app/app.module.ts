import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Configuracion del locale 
import localeEsHN from "@angular/common/locales/es-HN";
import localeFrCA from "@angular/common/locales/fr-CA";

import { registerLocaleData } from "@angular/common";


registerLocaleData(localeEsHN)
registerLocaleData(localeFrCA)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es-HN"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
