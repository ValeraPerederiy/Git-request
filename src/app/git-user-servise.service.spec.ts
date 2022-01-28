import { TestBed } from '@angular/core/testing';

import { GitUserServiseService } from './git-user-servise.service';

describe('GitUserServiseService', () => {
  let service: GitUserServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitUserServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
