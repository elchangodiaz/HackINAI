import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//const array3 = array1.concat(array2);
export class CastSelection{
  registros:any[]= [];
  constructor(){}
  cast( selected:string){
    if(selected=='puesto'){

    }else if (selected == 'ubicacion'){

    }
  }
}