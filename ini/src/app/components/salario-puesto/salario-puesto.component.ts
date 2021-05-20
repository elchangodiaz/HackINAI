import { Component, OnInit } from '@angular/core';
import { FiltroPuesto } from 'src/app/services/filtros_salarios/filtroPuesto';
import { SalariosComponent } from '../salarios/salarios.component';

@Component({
  selector: 'app-salario-puesto',
  templateUrl: './salario-puesto.component.html',
  styleUrls: ['./salario-puesto.component.css']
})
export class SalarioPuestoComponent implements OnInit {
  data: string[] = ['l', 'o'];
  numeroPuestos: any[] = [];
  nombresPuestos: string[] = [];
  porAlcaldia: Map<string, number>[] = [];
  constructor( private filtro: FiltroPuesto, private salario:SalariosComponent) { }

  ngOnInit(): void {
    //this.data = this.salario.getData();
    this.transformarDatos();
  }
  transformarDatos() {
    let temp = this.filtro.transform(this.data);
    this.porAlcaldia = temp[0];
    this.numeroPuestos = temp[1];
    this.nombresPuestos = temp[2];
  }

}
