import { Component, OnInit, Input } from '@angular/core';
import { AnnotatedDataSet } from '../../shipment-detail/shipment-data/shipment-data.component';

@Component({
  selector: 'app-shipment-data-table',
  templateUrl: './shipment-data-table.component.html',
  styleUrls: ['./shipment-data-table.component.scss']
})
export class ShipmentDataTableComponent implements OnInit {
  @Input() annotatedData: AnnotatedDataSet[];
  constructor() { }

  ngOnInit() {
  }

}
