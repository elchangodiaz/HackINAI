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
  public nombres = [
    'Álvaro Obregón',
    'Azcapotzalco',
    'Benito Juárez',
    'Coyoacán',
    'cuajimalpa',
    'Cuahutémoc',
    'Gustavo A. Madero',
    'Iztacalco',
    'Iztapalapa',
    'Magdalena Contreras',
    'Miguel Hidalgo',
    'Milpa Alta',
    'Tláhuac',
    'Tlalpan',
    'Venustiano Carranza',
    'Xochimilco'

]
public Data = [0,1,0,0,0,9086,0,4099,0,0,1,1,1,1,1,1];
public doughnutChartType: string = 'doughnut';
  constructor( private filtro: FiltroUbicacion) { }

  ngOnInit(): void {
    //this.data = this.salario.getData();
    this.transformarDatos();
  }
  transformarDatos() {
    this.alcaldiaSalarios = this.filtro.transform(this.data); 
  }
}
