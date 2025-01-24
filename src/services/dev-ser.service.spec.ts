import { TestBed } from '@angular/core/testing';

import { DevSerService } from './dev-ser.service';

describe('DevSerService', () => {
  let service: DevSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
