import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentSummaryTileComponent } from './shipment-summary-tile.component';

describe('ShipmentSummaryTileComponent', () => {
  let component: ShipmentSummaryTileComponent;
  let fixture: ComponentFixture<ShipmentSummaryTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentSummaryTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentSummaryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
