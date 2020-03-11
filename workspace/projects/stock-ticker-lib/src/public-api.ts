/*
 * Public API Surface of stock-ticker-lib
 */

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {StockTickerLibModule} from './lib/stock-ticker-lib.module';

export * from './lib/stock-ticker-lib.module';
export * from './lib/stock-ticker-lib/stock-ticker-lib.component';

// Bootstrap the primary module
platformBrowserDynamic()
  .bootstrapModule(StockTickerLibModule)
  .catch(err => console.error(err));
