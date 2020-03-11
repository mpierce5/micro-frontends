import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTickerLibComponent } from './stock-ticker-lib.component';

describe('StockTickerLibComponent', () => {
  let component: StockTickerLibComponent;
  let fixture: ComponentFixture<StockTickerLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTickerLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTickerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
