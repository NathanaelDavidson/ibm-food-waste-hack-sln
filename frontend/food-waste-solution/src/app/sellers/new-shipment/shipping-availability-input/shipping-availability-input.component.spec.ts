import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAvailabilityInputComponent } from './shipping-availability-input.component';

describe('ShippingAvailabilityInputComponent', () => {
  let component: ShippingAvailabilityInputComponent;
  let fixture: ComponentFixture<ShippingAvailabilityInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingAvailabilityInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingAvailabilityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
