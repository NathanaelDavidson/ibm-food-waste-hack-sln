import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/models/contract';
import { Shipment } from 'src/app/models/shipment';
import { ShipmentService } from 'src/app/shipment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contract-summary',
  templateUrl: './contract-summary.component.html',
  styleUrls: ['./contract-summary.component.scss']
})
export class ContractSummaryComponent implements OnInit {
  @Input() contract: Contract;
  @Input() title: string;
  shipment$: Observable<Shipment>;
  constructor(private shipmentService: ShipmentService) { }

  ngOnInit() {
    this.shipment$ = this.shipmentService.getShipment(+this.contract.shipment);
  }

}
