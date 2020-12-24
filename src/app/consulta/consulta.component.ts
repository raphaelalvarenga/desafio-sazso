import { Component, OnInit } from '@angular/core';
import { Vehicle } from '@app/classes';
import { FormControl, Validators } from '@angular/forms';
import { VehicleService } from '@app/services/vehicle.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@app/global-components/dialog/dialog.component';
import { LoginService } from '@app/services/login.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  // Properties
  vehicle: Vehicle;
  tableData: Array<Vehicle> = [];
  inputForm = new FormControl('', Validators.required);
  screenWidth: number;
  isLoading = false;

  constructor(private vehicleService: VehicleService, public dialog: MatDialog, private loginService: LoginService) { }

  ngOnInit(): void {

    // Screen width will be used to deal with responsive tables
    this.screenWidth = window.innerWidth;

  }

  getVehicle() {

    // Before requesting to the API, check if the input isn't blank
    if ((this.inputForm.value as string).length < 1) {
      return false;
    }

    // Clean the table and show the loader
    this.cleanTable();
    this.isLoading = true;

    // Set the search text to lowercase
    this.inputForm.setValue((this.inputForm.value as string).toLowerCase());

    // Call the service
    this.vehicleService
      .getVehicle(this.inputForm.value)
      .subscribe(
        success => {

          // If user token is no longer valid, redirect the app to login page
          if (success.feedbacks.length > 0) {
            if (success.feedbacks[0].code === 'FORBIDDEN') {
              this.loginService.logout();
              return false;
            }
          }

          // Destructure the response into consts
          const { msg, plate, chassis, brand, model, color, yearManufactur, yearModel } = success.data as Vehicle;

          // Create an object with them, push them to tableData and set loader to false
          this.vehicle = new Vehicle(msg === null ? '-' : msg, plate, chassis, brand, model, color, yearManufactur, yearModel);
          this.tableData.push(this.vehicle);
          this.isLoading = false;
        },

        error => {

          // Show the error message
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
    this.cleanTable();
  }

}
