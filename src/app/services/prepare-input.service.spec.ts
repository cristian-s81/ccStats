import { TestBed } from '@angular/core/testing';

import { PrepareInputService } from './prepare-input.service';

describe('PrepareInputService', () => {
  let service: PrepareInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrepareInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
