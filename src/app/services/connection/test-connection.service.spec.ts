/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestConnectionService } from './test-connection.service';

describe('Service: TestConnection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestConnectionService]
    });
  });

  it('should ...', inject([TestConnectionService], (service: TestConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
