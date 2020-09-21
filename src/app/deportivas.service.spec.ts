import { TestBed } from '@angular/core/testing';

import { DeportivasService } from './deportivas.service';

describe('DeportivasService', () => {
  let service: DeportivasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeportivasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
