import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class getCsv{
  data = 'https://raw.githubusercontent.com/Erick2G/Hack2021/main/csvs/primer_trim_concurso.csv';
  constructor(private http: HttpClient){}
  getInfo( dir:string){
    const lista = this.http.get(dir,{responseType:'text'});
    return lista;
  }
}
