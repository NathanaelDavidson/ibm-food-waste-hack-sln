import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SimpleShipment } from 'src/app/models/shipment';
import { ShipmentService } from 'src/app/shipment.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-buyer-shipment-overview',
  templateUrl: './buyer-shipment-overview.component.html',
  styleUrls: ['./buyer-shipment-overview.component.scss']
})
export class BuyerShipmentOverviewComponent implements OnInit {
  shipments$: Observable<SimpleShipment[]>;
  errorMessage: string;
  constructor(private shipmentService: ShipmentService) { }

  ngOnInit() {
    this.shipments$ = this.shipmentService.getAllShipments().pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        return of(null);
      })
    );
  }

}
