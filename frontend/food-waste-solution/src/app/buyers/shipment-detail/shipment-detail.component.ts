import { Component, OnInit, Input } from '@angular/core';
import { ShipmentService } from 'src/app/shipment.service';
import { Shipment } from 'src/app/models/shipment';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.scss']
})
export class ShipmentDetailComponent implements OnInit {
  shipment$: Observable<Shipment>;
  constructor(private shipments: ShipmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.shipment$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const shipmentId = +params.get('id');
        return this.shipments.getShipment(shipmentId).pipe(
          map(shipment => {
            shipment.shipmentId = shipmentId;
            return shipment;
          })
        );
      })
    );
  }

}
