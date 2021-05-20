import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SalariosComponent } from './components/salarios/salarios.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { FiltrosSalatiosComponent } from './components/filtros-salatios/filtros-salatios.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalariosComponent,
    FiltrosSalatiosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    //HttpClient,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
