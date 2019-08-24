import { TestBed } from '@angular/core/testing';

import { BuyerContractService } from './buyer-contract.service';

describe('BuyerContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyerContractService = TestBed.get(BuyerContractService);
    expect(service).toBeTruthy();
  });
});
