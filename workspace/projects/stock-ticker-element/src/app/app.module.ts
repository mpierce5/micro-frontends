import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { StockTickerLibComponent } from '../../../stock-ticker-lib/src/lib/stock-ticker-lib/stock-ticker-lib.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    StockTickerLibComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MatSliderModule
  ],
  providers: [],
  exports: [
    StockTickerLibComponent
  ],
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
