import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/models/contract';
import { ContractService } from 'src/app/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {
  @Input() contracts: Contract[];
  @Input() showActions = false;
  constructor(public contractService: ContractService) { }

  ngOnInit() {
  }

}
