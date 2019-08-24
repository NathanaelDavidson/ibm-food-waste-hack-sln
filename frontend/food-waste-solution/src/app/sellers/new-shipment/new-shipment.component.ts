import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShipmentService } from 'src/app/shipment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-shipment',
  templateUrl: './new-shipment.component.html',
  styleUrls: ['./new-shipment.component.scss']
})
export class NewShipmentComponent implements OnInit {
  shipmentForm: FormGroup;
  errorMessage: string;
  image: File;
  unitOptions = [
    'kilograms',
    'pounds',
    'metric tons',
    'US tons'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef,
    private shipmentService: ShipmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.shipmentForm = this.formBuilder.group({
      quantity: [undefined, [Validators.required]],
      units: [undefined, [Validators.required]],
      source: [undefined, [Validators.required]],
      destination: [undefined, [Validators.required]],
      image: [undefined, [Validators.required]]
    });
  }

  onInputFileChange(input: HTMLInputElement): void {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.shipmentForm.get('image').setValue(input.files[0]);
        this.changeDetector.markForCheck();
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit(): void {
    this.shipmentService.createShipment(this.shipmentForm.value).subscribe(resp => {
      this.router.navigate(['/sellers']);
    }, error => {
      this.errorMessage = 'Something went wrong. Please try again.';
    });
  }
}
