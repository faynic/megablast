import { TestBed } from '@angular/core/testing';

import { OmaxService } from './omax.service';

describe('OmaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OmaxService = TestBed.get(OmaxService);
    expect(service).toBeTruthy();
  });
});
