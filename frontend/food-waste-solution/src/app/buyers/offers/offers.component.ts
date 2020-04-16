import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from 'src/app/models/contract';
import { BuyerContractService } from '../buyer-contract.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers$: Observable<Contract[]>;
  constructor(private contractService: BuyerContractService) { }

  ngOnInit() {
    this.offers$ = this.contractService.getPendingOffers();
  }

}