import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipment, SimpleShipment } from './models/shipment';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private http: HttpClient) { }

  getAllShipments(): Observable<Shipment[]> {
    return this.http.post<Shipment[]>(environment.urls.allShipments, {}).pipe(
      take(1)
    );
  }

  getShipmentsBySeller(): Observable<Shipment[]> {
    return this.http.post<Shipment[]>(environment.urls.shipmentListBySeller, {}).pipe(
      take(1)
    );
  }

  getShipment(shipmentId: number): Observable<Shipment> {
    return this.http.post<Shipment>(environment.urls.shipmentDetail, {
      shipmentId: shipmentId.toString()
    }).pipe(
      take(1)
    );
  }

  createShipment(shipment: {
    quantity: number,
    units: string,
    source: string,
    destination: string,
    image: File
  }) {
    const formData = new FormData();
    Object.keys(shipment).forEach(key => {
      formData.append(key, shipment[key]);
    });
    return this.http.post(environment.urls.shipmentCreate, formData).pipe(
      take(1)
    );
  }
}
