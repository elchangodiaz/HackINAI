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
import { FiltrosSalatiosComponent } from './components/filtros-salatios/filtros-salatios.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalariosComponent,
    FiltrosSalatiosComponent,
    InicioComponent,
    MapComponent,
    TableComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    //HttpModule,
    //HttpClient,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
