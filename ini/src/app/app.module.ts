import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SalariosComponent } from './components/salarios/salarios.component';
import { MapComponent } from './components/map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './components/table/table.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import { SalarioPuestoComponent } from './components/salario-puesto/salario-puesto.component';
import { map, delay } from "rxjs/operators";
import { FiltradoUbicacionComponent } from './components/filtrado-ubicacion/filtrado-ubicacion.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalariosComponent,
    MapComponent,
    TableComponent,
    NavBarComponent,
    SalarioPuestoComponent,
    FiltradoUbicacionComponent

  ],
  imports: [
    BrowserModule,
    //HttpModule,
    //HttpClient,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [SalarioPuestoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
