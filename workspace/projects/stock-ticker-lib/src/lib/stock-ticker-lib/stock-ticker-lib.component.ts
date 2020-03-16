import { Component, OnInit } from '@angular/core';
import { StockTickerService } from './stock-ticker.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'lib-stock-ticker-lib',
  templateUrl: './stock-ticker-lib.component.html',
  styleUrls: ['./stock-ticker-lib.component.css']
})
export class StockTickerLibComponent implements OnInit {
  public stockSymbol = 'WMT';
  public stockData$: Observable<any>;
  constructor(private stockTickerService: StockTickerService) {
    this.stockData$ = this.stockTickerService.getStockData(this.stockSymbol);
  }

  ngOnInit(): void {
  }

}
