//Esta clase sólo recoge los datos obtenidos del csv y los separa en un arreglo

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//const array3 = array1.concat(array2);
export class TransformSalario{
  registros:any[]= [];
  constructor(){}
  transform( texto:string[]){
    //this.registros.push([]);
    texto.forEach((e: string)=> {//para cada elemento separamos por comas y guardamos todo en un arreglo
      let campos = e.split(',');
      this.registros.push(campos);
    });
    return this.registros;
  }
}