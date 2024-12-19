import { TestBed } from '@angular/core/testing';

import { ApiServeService } from './api-serve.service';

describe('ApiServeService', () => {
  let service: ApiServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
