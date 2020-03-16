Setup Full Element
    1. Create a new application for the full element (stock-ticker-element)
    2. Remove everything except app.module (elements)
    3. In app module import the element component from the library
    4. Include all shared dependencies from library in app.module (elements)
    5. Update app.module to build component as an element
        export class AppModule {
          constructor(private injector: Injector) {}
          ngDoBootstrap() {
            const el = createCustomElement(StockTickerLibComponent,
              { injector: this.injector });
            customElements.define('stock-ticker-full', el);
          }
        }
    6. In angular.json add build file dependencies for full element
              "./dist/stock-ticker-element/runtime.js",
              "./dist/stock-ticker-element/polyfills.js",
              "./dist/stock-ticker-element/main.js"
    7. Add reference to custom element tag ('stock-ticker-full') to main application index.html (stock-ticker-app)
    8. Build/watch element repository
    9. Serve main application (stock-ticker-app)
        * new element should display and be identical to library element except for the custom element name (stock-ticker-full)
