import { TestBed } from '@angular/core/testing';

import { SellerContractService } from './seller-contract.service';

describe('SellerContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerContractService = TestBed.get(SellerContractService);
    expect(service).toBeTruthy();
  });
});
