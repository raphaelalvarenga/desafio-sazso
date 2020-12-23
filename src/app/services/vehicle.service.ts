import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@app/classes';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  api = 'https://api.treinamento.carzen.com.br/';
  headers: { Authorization: string };

  constructor(private http: HttpClient) {
    this.headers = {
      Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ7XCJpZFwiOjYsXCJlbWFpbFwiOlwicmFwaGFlbC50cmVpbmFtZW50b0BzYXpzby5jb20uYnJcIixcIm5hbWVcIjpcIlJhcGhhZWxcIn0iLCJleHAiOjE2MDg3NzAxOTgsImlhdCI6MTYwODc1NTc5OH0.YsynK3oaja5zTanx5w2D3xzksca-qLbZp84MVTz4dvQ'
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
