import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { StockTickerLibComponent } from '../../../stock-ticker-lib/src/lib/stock-ticker-lib/stock-ticker-lib.component';

@NgModule({
  declarations: [
    StockTickerLibComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [StockTickerLibComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(StockTickerLibComponent,
      { injector: this.injector });
    customElements.define('stock-ticker-full', el);
  }
}
