import { TestBed, inject } from '@angular/core/testing';

import { FixerService } from './fixer.service';

describe('FixerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixerService]
    });
  });

  it('should be created', inject([FixerService], (service: FixerService) => {
    expect(service).toBeTruthy();
  }));
});
