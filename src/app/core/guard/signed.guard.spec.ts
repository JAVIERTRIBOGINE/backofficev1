import { TestBed, async, inject } from '@angular/core/testing';

import { SignedGuard } from './signed.guard';

describe('SignedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignedGuard]
    });
  });

  it('should ...', inject([SignedGuard], (guard: SignedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
