import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalariosComponent } from './components/salarios/salarios.component';

const routes: Routes = [
  { path: 'salarios', component: SalariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
