import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockTickerService {
  private stockApiBaseUrl = 'https://financialmodelingprep.com/api/v3/company/profile/';
  constructor(private httpClient: HttpClient) { }
  getStockData(stockSymbol): Observable<any> {
    return this.httpClient.get(this.stockApiBaseUrl + stockSymbol);
  }
}
