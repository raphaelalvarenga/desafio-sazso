import { Component, OnInit } from '@angular/core';
import { List, User } from '@app/classes';
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

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getListConsultt();
  }

  getListConsultt() {
    this.isLoading = true;

    this.vehicleService
      .getListConsult()
      .subscribe(
        result => {
          this.listConsult = result.data.list as List[];

          this.listConsult = this.listConsult.map(item => {
            return new List(item.id, item.plate, new Date(item.date).toLocaleDateString(), item.user)
          });
          
          this.listConsultDisplay = this.listConsult;
          this.count = result.data.count as number;
          this.isLoading = false;
          this.noRequests = this.listConsult.length === 0 ? true : false;
        },

        error => {
          this.isLoading = false;
        }
      )
  }

}
