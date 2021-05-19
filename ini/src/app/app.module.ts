import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
//import { HttpClient} from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SalariosComponent } from './components/salarios/salarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalariosComponent
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    //HttpClient,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
