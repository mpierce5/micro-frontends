import { TestBed } from '@angular/core/testing';

import { TrainingLibraryService } from './training-library.service';

describe('TrainingLibraryService', () => {
  let service: TrainingLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
