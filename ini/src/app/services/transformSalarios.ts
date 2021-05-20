import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//const array3 = array1.concat(array2);
export class TransformSalario{
  registros:any[]= [];
  constructor(){}
  transform( texto:string[]){
    console.log('Datos en array');
    this.registros.push([]);
    texto.forEach((e: string)=> {//para cada elemento separamos por comas y guardamos todo en un arreglo
      let campos = e.split(',');
      this.registros.push(campos);
    });
    return this.registros;
  }
}