import { Component, OnInit, Input } from '@angular/core';
import { ShippingAvailabilityFormArray, ShippingAvailabilityFormGroup } from './availability-form-control';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-shipping-availability-input',
  templateUrl: './shipping-availability-input.component.html',
  styleUrls: ['./shipping-availability-input.component.scss']
})
export class ShippingAvailabilityInputComponent implements OnInit {
  @Input() initialLocationOption: string;
  selection: number;

  constructor(public controlContainer: ControlContainer) { }

  get formArray(): ShippingAvailabilityFormArray {
    return this.controlContainer.control as ShippingAvailabilityFormArray;
  }

  ngOnInit() {
    this.formArray.push(new ShippingAvailabilityFormGroup(this.initialLocationOption));
  }

  addDestination() {
    if (this.formArray.valid) {
      this.formArray.addControl();
      this.selection = this.formArray.length - 1;
    }
  }
}
