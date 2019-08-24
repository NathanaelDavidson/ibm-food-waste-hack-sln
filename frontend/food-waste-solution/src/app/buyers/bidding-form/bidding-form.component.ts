import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Shipment } from 'src/app/models/shipment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContractService } from 'src/app/contract.service';

@Component({
  selector: 'app-bidding-form',
  templateUrl: './bidding-form.component.html',
  styleUrls: ['./bidding-form.component.scss']
})
export class BiddingFormComponent implements OnChanges {
  @Input() shipment: Shipment;
  successMessage: string;
  errorMessage: string;
  biddingForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private contractService: ContractService) { }

  ngOnChanges() {
    const latestContract = this.shipment.contracts ? this.shipment.contracts[this.shipment.contracts.length - 1] : null;
    const bounds = latestContract ? {
      ambientTemp: latestContract.tempThreshold,
      temp: latestContract.tempThreshold,
      humid: latestContract.humidThreshold,
      voc: latestContract.vocThreshold,
      freshness: latestContract.freshnessThreshold,
      bid: latestContract.price
    } : this.shipment.boundaryReadings();
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
    if (latestContract) {
      bidValidators.push(Validators.max(latestContract.price));
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
