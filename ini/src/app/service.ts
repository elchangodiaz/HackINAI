import {Injectable} from '@angular/core';
//import { HttpModule } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service{
  data = 'https://raw.githubusercontent.com/Erick2G/Hack2021/main/csvs/primer_trim_concurso.csv';
  constructor(private http: HttpClient){}
  getInfo(){
    console.log('lista: ');
    const lista = this.http.get(this.data,{responseType:'text'});

    console.log(lista);
    return lista;
  }
}
