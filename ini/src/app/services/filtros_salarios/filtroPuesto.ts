import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//const array3 = array1.concat(array2);
export class FiltroPuesto{
  registros:any[]= [];
  numeroPuestos = [
      [0], // > 100
      [0], // entre 90 - 100
      [0], // 80 - 90
      [0], // 70 - 80
      [0], // 60 - 70
      [0], // 50 - 60
      [0], // 40 - 50
      [0], // 30 - 40
      [0], // 20 - 30
      [0], // 10 - 20
      [0]  // < 10 
  ];//para el resultado que se regresará
  nombresPuestos = [
    [], // > 100
    [], // entre 90 - 100
    [], // 80 - 90
    [], // 70 - 80
    [], // 60 - 70
    [], // 50 - 60
    [], // 40 - 50
    [], // 30 - 40
    [], // 20 - 30
    [], // 10 - 20
    []  // < 10 
];//para el resultado que se regresará
  constructor(){}
//12 16
  transform( texto:string[]){
    //this.registros.push([]);

    texto.forEach((e: string)=> {//para cada elemento separamos por comas y guardamos todo en un arreglo
      if(Number(e[16])>= 100000){

      }else if(Number(e[16])>= 90000){

      }else if(Number(e[16])>= 90000){
          
      }
    });
    return this.registros;
  }
}