import { Component, OnInit } from '@angular/core';
import { SimpleShipment } from 'src/app/models/shipment';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
  sellerShipments: SimpleShipment[];
  constructor() { }

  ngOnInit() {
  }

}
