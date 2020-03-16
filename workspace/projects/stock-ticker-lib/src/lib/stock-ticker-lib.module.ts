import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {StockTickerLibComponent} from './stock-ticker-lib/stock-ticker-lib.component';
import {BrowserModule} from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import { StockTickerService } from './stock-ticker-lib/stock-ticker.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [StockTickerLibComponent],
  imports: [BrowserModule,  HttpClientModule],
  providers: [StockTickerService],
  exports: []
})
export class StockTickerLibModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    // Turn our component into an Angular Element (Web Component)
    const stockTickerLibElement = createCustomElement(StockTickerLibComponent, {
      injector: this.injector,
    });
    customElements.define(
      'stock-ticker',
      stockTickerLibElement
    );
  }
}
