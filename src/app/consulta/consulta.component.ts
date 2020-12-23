import { Component, OnInit } from '@angular/core';
import { Vehicle } from '@app/classes';
import { FormControl, Validators } from '@angular/forms';
import { VehicleService } from '@app/services/vehicle.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  vehicle: Vehicle;
  tableData: Array<Vehicle> = [];
  inputForm = new FormControl('', Validators.required);
  screenWidth: number;

  displayedColumns: string[] = ['plate', 'brand', 'model', 'color', 'chassis', 'yearManufactur', 'yearModel', 'msg'];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
    const plate = [];

    for (let x = 0; x < 3; x++) {
      const randomNumber = Math.floor(Math.random() * letters.length);
      const randomLetter = letters[randomNumber];
      plate.push(randomLetter);
    }

    for (let x = 0; x < 4; x++) {
      const randomNumber = Math.floor(Math.random() * 10);
      plate.push(randomNumber);
    }

    this.inputForm.setValue(plate.join(''));
    this.inputForm.setValue('wpn8077');

    const randomNumber = Math.ceil(Math.random() * letters.length);

    this.screenWidth = window.innerWidth;
  }

  getVehicle() {
    if ((this.inputForm.value as string).length < 1) {
      return false;
    }

    this.vehicleService
      .getVehicle(this.inputForm.value)
      .subscribe(
        success => {
          const { msg, plate, chassis, brand, model, color, yearManufactur, yearModel } = success.data as Vehicle;
          this.vehicle = new Vehicle(msg, plate, chassis, brand, model, color, yearManufactur, yearModel);
          this.tableData.push(this.vehicle);
        },

        error => {
          console.log(error.error.feedbacks[0].msg);
        }
    );
  }

}
