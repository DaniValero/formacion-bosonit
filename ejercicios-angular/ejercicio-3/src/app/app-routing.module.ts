import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './pages/crud/crud.component';

const routes: Routes = [
  {
    path: "",
    component: CrudComponent
  }, 
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
