import { TestBed, inject } from '@angular/core/testing';

import { ProductionServiceService } from './production-service.service';

describe('ProductionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductionServiceService]
    });
  });

  it('should be created', inject([ProductionServiceService], (service: ProductionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
