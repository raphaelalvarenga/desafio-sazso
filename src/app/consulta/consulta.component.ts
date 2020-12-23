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
  input: string;
  inputForm = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
