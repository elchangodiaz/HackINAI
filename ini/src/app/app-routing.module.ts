import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './components/map/map.component';
import { TableComponent } from './components/table/table.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SalariosComponent } from './components/salarios/salarios.component'

const routes: Routes = [
  { path: 'mapComp', component: MapComponent },
  { path: 'table', component: TableComponent },
  { path: 'salarios', component: SalariosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
