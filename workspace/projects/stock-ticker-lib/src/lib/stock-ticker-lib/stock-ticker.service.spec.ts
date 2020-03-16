import { TestBed } from '@angular/core/testing';

import { StockTickerService } from './stock-ticker.service';

describe('StockTickerService', () => {
  let service: StockTickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockTickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
