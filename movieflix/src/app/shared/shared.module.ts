import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SearchBoxComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [SearchBoxComponent],
})
export class SharedModule {}
