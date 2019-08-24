import { Component, OnInit, Input } from '@angular/core';
import { SimpleShipment, Shipment } from 'src/app/models/shipment';

@Component({
  selector: 'app-shipment-summary-tile',
  templateUrl: './shipment-summary-tile.component.html',
  styleUrls: ['./shipment-summary-tile.component.scss']
})
export class ShipmentSummaryTileComponent implements OnInit {
  @Input() shipment: Shipment;
  constructor() { }

  ngOnInit() {
  }

}
