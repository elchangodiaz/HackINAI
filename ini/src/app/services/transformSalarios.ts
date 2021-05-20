import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformSalario{
  registros:any[]= [];
  cont:number = 0;
  constructor(){}
  transform( texto:string[]){
    console.log('Datos en array');
    this.registros.push([]);
    //const r = texto.split('\n');//recibimos un texto que separamos cada salto de linea
    texto.forEach((e: string)=> {//para cada elemento separamos por comas y guardamos todo en un arreglo
      let campos = e.split(',');
      this.registros.push(campos);
      //console.log(this.registros[2][5]);
    });
    return this.registros;
  }
}