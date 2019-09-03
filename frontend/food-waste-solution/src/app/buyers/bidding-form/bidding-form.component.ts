import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Shipment, boundaryReadings } from 'src/app/models/shipment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContractService } from 'src/app/contract.service';
import { Contract } from 'src/app/models/contract';

@Component({
  selector: 'app-bidding-form',
  templateUrl: './bidding-form.component.html',
  styleUrls: ['./bidding-form.component.scss']
})
export class BiddingFormComponent implements OnChanges {
  @Input() shipment: Shipment;
  latestContract: Contract;
  boundaryReadings;
  successMessage: string;
  errorMessage: string;
  biddingForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private contractService: ContractService) { }

  ngOnChanges() {
    this.latestContract = this.shipment.contracts ? this.shipment.contracts[this.shipment.contracts.length - 1] : null;
    this.boundaryReadings = boundaryReadings(this.shipment);
    const bounds = this.latestContract ? {
      ambientTemp: this.latestContract.tempThreshold,
      temp: this.latestContract.tempThreshold,
      humid: this.latestContract.humidThreshold,
      voc: this.latestContract.vocThreshold,
      freshness: this.latestContract.freshnessThreshold,
      bid: this.latestContract.price
    } : this.boundaryReadings;
    const ambientTempValidators = [Validators.required];
    const tempValidators = [Validators.required];
    const humidValidators = [Validators.required];
    const vocValidators = [Validators.required];
    const freshnessValidators = [Validators.required];
    const bidValidators = [Validators.required, Validators.min(0)];
    if (bounds.ambientTemp) {
      ambientTempValidators.push(Validators.min(bounds.temp));
    }
    if (bounds.temp) {
      tempValidators.push(Validators.min(bounds.temp));
    }
    if (bounds.humid) {
      humidValidators.push(Validators.min(bounds.humid));
    }
    if (bounds.voc) {
      vocValidators.push(Validators.min(bounds.voc));
    }
    if (bounds.freshness) {
      freshnessValidators.push(Validators.max(bounds.freshness));
    }
    if (this.latestContract) {
      bidValidators.push(Validators.max(this.latestContract.price));
    }
    this.biddingForm = this.formBuilder.group({
      ambientTemp: [undefined, ambientTempValidators],
      temp: [undefined, tempValidators],
      humid: [undefined, humidValidators],
      voc: [undefined, vocValidators],
      freshness: [undefined, freshnessValidators],
      bid: [undefined, bidValidators]
    });
  }

  onSubmit() {
    this.successMessage = null;
    this.errorMessage = null;
    const formData = this.biddingForm.value;
    this.contractService.makeOffer(this.shipment.shipmentId,
      formData.temp,
      formData.ambientTemp,
      formData.humid,
      formData.voc,
      formData.freshness,
      formData.bid
      )
      .subscribe(resp => {
        this.successMessage = 'Contract offer sent!';
      }, error => {
        this.errorMessage = 'Something went wrong. Please try again.';
      });
  }
}
