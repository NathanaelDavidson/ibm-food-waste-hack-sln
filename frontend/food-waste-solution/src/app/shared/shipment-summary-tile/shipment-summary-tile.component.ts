import { Component, OnInit, Input } from '@angular/core';
import { SimpleShipment } from 'src/app/models/shipment';

@Component({
  selector: 'app-shipment-summary-tile',
  templateUrl: './shipment-summary-tile.component.html',
  styleUrls: ['./shipment-summary-tile.component.scss']
})
export class ShipmentSummaryTileComponent implements OnInit {
  @Input() shipment: SimpleShipment;
  constructor() { }

  ngOnInit() {
  }

}
