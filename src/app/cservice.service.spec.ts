import { TestBed } from '@angular/core/testing';

import { CServiceService } from './cservice.service';

describe('CServiceService', () => {
  let service: CServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
