import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { PaginatorComponent } from './components/paginator/paginator/paginator.component';

@NgModule({
  declarations: [SearchBoxComponent, PaginatorComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [SearchBoxComponent],
})
export class SharedModule {}
