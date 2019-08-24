import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerShipmentOverviewComponent } from './buyer-shipment-overview.component';

describe('BuyerShipmentOverviewComponent', () => {
  let component: BuyerShipmentOverviewComponent;
  let fixture: ComponentFixture<BuyerShipmentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerShipmentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerShipmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
