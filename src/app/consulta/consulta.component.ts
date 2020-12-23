import { Component, OnInit } from '@angular/core';
import { Vehicle } from '@app/classes';
import { FormControl, Validators } from '@angular/forms';
import { VehicleService } from '@app/services/vehicle.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@app/global-components/dialog/dialog.component';

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
  isLoading = false;

  displayedColumns: string[] = ['plate', 'brand', 'model', 'color', 'chassis', 'yearManufactur', 'yearModel', 'msg'];

  constructor(private vehicleService: VehicleService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  getVehicle() {
    if ((this.inputForm.value as string).length < 1) {
      return false;
    }

    this.cleanTable();
    this.isLoading = true;

    this.inputForm.setValue((this.inputForm.value as string).toLowerCase())

    this.vehicleService
      .getVehicle(this.inputForm.value)
      .subscribe(
        success => {
          const { msg, plate, chassis, brand, model, color, yearManufactur, yearModel } = success.data as Vehicle;
          this.vehicle = new Vehicle(msg === null ? '-' : msg, plate, chassis, brand, model, color, yearManufactur, yearModel);
          this.tableData.push(this.vehicle);
          this.isLoading = false;
        },

        error => {
          this.isLoading = false;
          this.dialog.open(DialogComponent, {
            data: {
              type: 'error',
              msg: error.error.feedbacks[0].msg,
              payload: {}
            }
          });
        }
    );
  }

  cleanTable() {
    this.tableData = [];
  }

  cleanInput() {
    this.inputForm.setValue('');
  }

}
