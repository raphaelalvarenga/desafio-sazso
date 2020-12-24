import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { List, User } from '@app/classes';
import { DialogComponent } from '@app/global-components/dialog/dialog.component';
import { VehicleService } from '@app/services/vehicle.service';

@Component({
  selector: 'app-list-consult',
  templateUrl: './list-consult.component.html',
  styleUrls: ['./list-consult.component.css']
})
export class ListConsultComponent implements OnInit {

  // Properties
  listConsult: Array<List> = [];
  listConsultDisplay: Array<List> = [];
  isLoading = false;
  count: number;
  noRequests = false;
  filter: string;

  constructor(private vehicleService: VehicleService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {

    // Start requesting to the API
    this.getListConsultt();
  }

  getListConsultt() {

    // Set the loader true
    this.isLoading = true;

    // Call the service
    this.vehicleService
      .getListConsult()
      .subscribe(
        success => {

          if (success.feedbacks.length > 0) {
            if (success.feedbacks[0].code === 'FORBIDDEN') {

              // Redirect to login page
              this.router.navigate(['/login']);
              return false;

            }
          }

          // Populate listConsult with API data
          this.listConsult = success.data.list as List[];

          // The API reponds with date in the timestamp format, so it needs to be formatted
          this.listConsult = this.listConsult.map(item => {
            return new List(item.id, item.plate, new Date(item.date).toLocaleDateString(), item.user);
          });

          // listConsult is the official database while listConsultDisplay will be used for filtering
          this.listConsultDisplay = this.listConsult;
          this.count = success.data.count as number;
          this.isLoading = false;
          this.noRequests = this.listConsult.length === 0 ? true : false;
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

  // Any time user inserts text in filter field, this method will be triggered
  filtering() {
    if (this.listConsultDisplay.length === 0) {
      this.listConsultDisplay = this.listConsult;
    } else {
      this.listConsultDisplay = this.listConsult.filter(item => item.plate.includes(this.filter));
    }
  }

}
