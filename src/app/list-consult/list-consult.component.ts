import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { List, User } from '@app/classes';
import { DialogComponent } from '@app/global-components/dialog/dialog.component';
import { VehicleService } from '@app/services/vehicle.service';

@Component({
  selector: 'app-list-consult',
  templateUrl: './list-consult.component.html',
  styleUrls: ['./list-consult.component.css']
})
export class ListConsultComponent implements OnInit {

  listConsult: Array<List> = [];
  listConsultDisplay: Array<List> = [];
  isLoading = false;
  count: number;
  noRequests = false;

  constructor(private vehicleService: VehicleService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListConsultt();
  }

  getListConsultt() {
    this.isLoading = true;

    this.vehicleService
      .getListConsult()
      .subscribe(
        success => {

          if (success.feedbacks.length > 0) {
            if (success.feedbacks[0].code === 'FORBIDDEN') {
              // Direcionar para a tela de login
              return false;
            }
          }
          
          this.listConsult = success.data.list as List[];

          this.listConsult = this.listConsult.map(item => {
            return new List(item.id, item.plate, new Date(item.date).toLocaleDateString(), item.user)
          });
          
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
      )
  }

}
