import { Component, OnInit } from '@angular/core';
import {getCsv} from '../../services/getCsv';
import {TransformSalario} from '../../services/transformSalarios';

@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.component.html',
  styleUrls: ['./salarios.component.css']
})
export class SalariosComponent implements OnInit {
  data: any = [];
  selected = 'puestos';
  urlTrimestre = 'https://raw.githubusercontent.com/Erick2G/Hack2021/main/csvs/primer_trim_concurso.csv';
  constructor(private getcsv: getCsv, private t:TransformSalario) {}

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.getcsv.getInfo(this.urlTrimestre).subscribe(infos =>{
      const list = infos.split('\n');
      this.data = this.t.transform(list);
    })
  }
}


