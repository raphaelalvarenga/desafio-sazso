import { Component, OnInit } from '@angular/core';
import { Vehicle } from '@app/classes';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  vehicle: Vehicle;
  tableData: Array<Vehicle> = [];
  input: string;
  inputForm = new FormControl('');
  screenWidth: number;

  displayedColumns: string[] = ['plate', 'brand', 'model', 'color', 'chassis', 'yearManufactur', 'yearModel', 'msg'];

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.vehicle = new Vehicle('-', 'OYE2000', '9BGPB69M0EB232066', 'GM', 'CHEVROLETCRUZE LT NB', 'PRATA', 2013, 2014);
    this.tableData.push(this.vehicle);
  }

}
