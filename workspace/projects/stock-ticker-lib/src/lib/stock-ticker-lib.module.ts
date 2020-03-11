import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import { StockTickerLibComponent } from './stock-ticker-lib/stock-ticker-lib.component';
import {BrowserModule} from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [StockTickerLibComponent],
  imports: [BrowserModule],
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
