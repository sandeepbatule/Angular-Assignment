import { TestBed } from '@angular/core/testing';

import { EntrollmentService } from './entrollment.service';

describe('EntrollmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntrollmentService = TestBed.get(EntrollmentService);
    expect(service).toBeTruthy();
  });
});
