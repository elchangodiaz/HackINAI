import { Component, OnInit } from '@angular/core';
import {Service} from '../../service';
@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.component.html',
  styleUrls: ['./salarios.component.css']
})
export class SalariosComponent implements OnInit {
  data: any = [];
  constructor(private service: Service) {}

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.service.getInfo().subscribe(data =>{
      const list = data.split('\n');
      list.forEach(e =>{
        this.data.push(e);
      })
    })
  }
}
