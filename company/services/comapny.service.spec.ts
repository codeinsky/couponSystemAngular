import { TestBed, inject } from '@angular/core/testing';

import { ComapnyService } from './comapny.service';

describe('ComapnyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComapnyService]
    });
  });

  it('should be created', inject([ComapnyService], (service: ComapnyService) => {
    expect(service).toBeTruthy();
  }));
});
