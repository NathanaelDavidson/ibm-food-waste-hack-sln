import { Component, OnInit, Input } from '@angular/core';
import { SimpleContract } from 'src/app/models/contract';

@Component({
  selector: 'app-contract-summary',
  templateUrl: './contract-summary.component.html',
  styleUrls: ['./contract-summary.component.scss']
})
export class ContractSummaryComponent implements OnInit {
  @Input() contract: SimpleContract;
  constructor() { }

  ngOnInit() {
  }

}
