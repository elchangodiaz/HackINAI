import { Component, OnInit } from '@angular/core';
import { FiltroPuesto } from 'src/app/services/filtros_salarios/filtroPuesto';
import { SalariosComponent } from '../salarios/salarios.component';

@Component({
  selector: 'app-salario-puesto',
  templateUrl: './salario-puesto.component.html',
  styleUrls: ['./salario-puesto.component.css']
})
export class SalarioPuestoComponent implements OnInit {
  data: string[] = [];
  numeroPuestos: number[] = [];
  nombresPuestos: string[] = [];
  porAlcaldia: Map<string, number>[] = [];
  public Labels = ['+$100m','$90m-$100m','$80m-$90m','$70m-$80m', '$60m-$70m','$50m-$60m','$40m-$50m','$30m-$40m','$20m-$30m','$10Mm-$20m','-$10m'];
  public Data = [0,1,0,1,9,1,24,48,256,3578,9303];
  public doughnutChartType: string = 'doughnut';
  constructor(private filtro: FiltroPuesto, private salario: SalariosComponent) { }

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
  public chartHovered(e: any): void {

  }
}
