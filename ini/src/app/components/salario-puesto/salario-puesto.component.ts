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
  numeroPuestos: number[] = [];
  nombresPuestos: string[] = [];
  porAlcaldia: Map<string, number>[] = [];
  public Labels = ['x>100000','90000-100000','80000-90000','70000-80000', '60000-70000','50000-60000','40000-50000','30000-40000','20000-30000','10000-20000','>10000'];
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
