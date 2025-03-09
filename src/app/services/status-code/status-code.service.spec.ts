/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StatusCodeService } from './status-code.service';

describe('Service: StatusCode', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusCodeService]
    });
  });

  it('should ...', inject([StatusCodeService], (service: StatusCodeService) => {
    expect(service).toBeTruthy();
  }));
});
