import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

@NgModule({
  declarations: [SearchBoxComponent, LayoutComponent, CardListComponent, WelcomePageComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [SearchBoxComponent, LayoutComponent, CardListComponent],
})
export class SharedModule {}
