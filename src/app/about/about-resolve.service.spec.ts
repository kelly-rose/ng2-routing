import { TestBed, inject } from '@angular/core/testing';

import { AboutResolveService } from './about-resolve.service';

describe('AboutResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutResolveService]
    });
  });

  it('should be created', inject([AboutResolveService], (service: AboutResolveService) => {
    expect(service).toBeTruthy();
  }));
});
