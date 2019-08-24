import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDataTableComponent } from './shipment-data-table.component';

describe('ShipmentDataTableComponent', () => {
  let component: ShipmentDataTableComponent;
  let fixture: ComponentFixture<ShipmentDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
