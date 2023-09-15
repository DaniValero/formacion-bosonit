import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchBoxComponent],
  imports: [CommonModule, RouterModule],
  exports: [SearchBoxComponent],
})
export class SharedModule {}
