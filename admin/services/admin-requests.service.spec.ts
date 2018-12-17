import { TestBed, inject } from '@angular/core/testing';

import { AdminRequestsService } from './admin-requests.service';

describe('AdminRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminRequestsService]
    });
  });

  it('should be created', inject([AdminRequestsService], (service: AdminRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
