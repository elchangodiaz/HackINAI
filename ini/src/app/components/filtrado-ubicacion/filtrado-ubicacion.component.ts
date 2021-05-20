import { Component, OnInit } from '@angular/core';
import {FiltroUbicacion} from 'src/app/services/filtros_salarios/filtroUbicacion';
@Component({
  selector: 'app-filtrado-ubicacion',
  templateUrl: './filtrado-ubicacion.component.html',
  styleUrls: ['./filtrado-ubicacion.component.css']
})
export class FiltradoUbicacionComponent implements OnInit {

  data: string[] = [];
  alcaldiaSalarios: any[] = [];
  constructor( private filtro: FiltroUbicacion) { }

  ngOnInit(): void {
    //this.data = this.salario.getData();
    this.transformarDatos();
  }
  transformarDatos() {
    this.alcaldiaSalarios = this.filtro.transform(this.data);
    console.log('length recibido: ',this.alcaldiaSalarios.length);
    console.log('dato: ',this.alcaldiaSalarios[0][8]);
    console.log('dato: ',this.alcaldiaSalarios[0][9]);
    console.log('dato: ',this.alcaldiaSalarios[0][10]);
    console.log('dato: ',this.alcaldiaSalarios[1][8]);
    console.log('dato: ',this.alcaldiaSalarios[1][9]);
    console.log('dato: ',this.alcaldiaSalarios[1][10]);
    
  }
}
