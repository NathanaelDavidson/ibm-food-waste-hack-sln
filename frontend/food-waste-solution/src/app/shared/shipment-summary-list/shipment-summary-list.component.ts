import { Component, OnInit, Input } from '@angular/core';
import { SimpleShipment } from 'src/app/models/shipment';

@Component({
  selector: 'app-shipment-summary-list',
  templateUrl: './shipment-summary-list.component.html',
  styleUrls: ['./shipment-summary-list.component.scss']
})
export class ShipmentSummaryListComponent implements OnInit {
  @Input() shipments: SimpleShipment;
  constructor() { }

  ngOnInit() {
  }

}
