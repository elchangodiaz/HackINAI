import { Component, OnInit } from '@angular/core';
import { getCsv } from '../../services/getCsv';
import { TransformSalario } from '../../services/transformSalarios';
import { FiltroPuesto } from 'src/app/services/filtros_salarios/filtroPuesto';
import {FiltroUbicacion} from 'src/app/services/filtros_salarios/filtroUbicacion';

@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.component.html',
  styleUrls: ['./salarios.component.css']
})
export class SalariosComponent implements OnInit {
  temp: any[] = [];
  data: string[] = ['l', 'o'];
  numeroPuestos: any[] = [];
  nombresPuestos: string[] = [];
  porAlcaldia: Map<string, number>[] = [];
  selected = 'puestos';
  urlTrimestre = 'https://raw.githubusercontent.com/Erick2G/Hack2021/main/csvs/primer_trim_concurso.csv';
  constructor(private getcsv: getCsv, private t: TransformSalario, private filtro: FiltroPuesto, private filtroUbicacion: FiltroUbicacion) { }

  ngOnInit(): void {
    this.prepararData();
    //const myZone = Zone.fork(myZoneSpec);
  }
  //FALTA PREPARA PARA OTROS TRIMESTRES
  prepararData() {
    this.data = [];
    this.getcsv.getInfo(this.urlTrimestre).subscribe(infos => {
      const list = infos.split('\n');
      this.data = this.t.transform(list);
      setTimeout(() => {
        console.log('This runs after.');
      }, 5000);
    });
  }

  getData() {
    return this.data;
  }

  segundoPaso() {
    this.temp = this.filtro.transform(this.data);
  }

  segundoPasoUbicacion() {
    this.temp = this.filtroUbicacion.transform(this.data);
  }


}


