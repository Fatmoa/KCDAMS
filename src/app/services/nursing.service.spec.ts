import { TestBed } from '@angular/core/testing';

import { NursingService } from './nursing.service';

describe('NursingService', () => {
  let service: NursingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
