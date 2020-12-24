import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@app/classes';
import { Constants } from '@app/enums/enums';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  api = Constants.api;
  headers: { Authorization: string };

  constructor(private http: HttpClient) {
    this.headers = {
      Authorization: localStorage.getItem('desafio-raphael-token')
    };
  }

  getVehicle(plate: string) {
    return this.http.get<Response>(`${this.api}vehicle/plate/${plate}`, {
      headers: new HttpHeaders(this.headers)
    });
  }

  getListConsult() {
    return this.http.get<Response>(`${this.api}vehicle/listConsult`, {
      headers: new HttpHeaders(this.headers)
    });
  }
}
