import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [SearchBoxComponent, LayoutComponent, ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [SearchBoxComponent, LayoutComponent],
})
export class SharedModule {}
