import { TestBed } from '@angular/core/testing';

import { LocalApicallService } from './local-apicall.service';

describe('LocalApicallService', () => {
  let service: LocalApicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalApicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
