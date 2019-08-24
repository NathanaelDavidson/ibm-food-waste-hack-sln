import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentSummaryListComponent } from './shipment-summary-list.component';

describe('ShipmentSummaryListComponent', () => {
  let component: ShipmentSummaryListComponent;
  let fixture: ComponentFixture<ShipmentSummaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentSummaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
