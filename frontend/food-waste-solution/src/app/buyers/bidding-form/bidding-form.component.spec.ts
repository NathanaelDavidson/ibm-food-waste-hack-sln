import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingFormComponent } from './bidding-form.component';

describe('BiddingFormComponent', () => {
  let component: BiddingFormComponent;
  let fixture: ComponentFixture<BiddingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
