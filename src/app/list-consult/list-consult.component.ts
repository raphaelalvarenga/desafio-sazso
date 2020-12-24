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
  isLoading = false;
  count: number;

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
          this.count = result.data.count as number;
          this.isLoading = false;
          console.log(this.listConsult);
        },

        error => {
          this.isLoading = false;
        }
      )
  }

}
