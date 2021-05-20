import { Component, OnInit } from '@angular/core';
import {SalariosComponent} from '../salarios/salarios.component';

@Component({
  selector: 'app-salario-puesto',
  templateUrl: './salario-puesto.component.html',
  styleUrls: ['./salario-puesto.component.css']
})
export class SalarioPuestoComponent implements OnInit {
  data: string[] = [];
  resultado:string[] = []; //Datos listos para mostrarse
  constructor(private salarios: SalariosComponent) { }

  ngOnInit(): void {
    this.data = this.salarios.getData();
    this.transformarDatos();
  }
  transformarDatos(){

  }

}
