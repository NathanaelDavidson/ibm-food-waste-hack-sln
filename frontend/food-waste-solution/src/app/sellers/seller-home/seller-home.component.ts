import { Component, OnInit } from '@angular/core';
import { Shipment } from 'src/app/models/shipment';
import { ShipmentService } from 'src/app/shipment.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
  sellerShipments$: Observable<Shipment[]>;
  loading = false;
  errorMessage: string;
  constructor(private shipmentService: ShipmentService) { }

  ngOnInit() {
    this.loading = true;
    this.sellerShipments$ = this.shipmentService.getShipmentsBySeller().pipe(
      tap(_ => {
        this.loading = false;
      }, error => {
        this.errorMessage = error.message;
        this.loading = false;
      })
    );
  }

}
