Setup Library Element
	1. create library (ng generate library {library-name}
	2. add a component to the library
	3. update lib.module.ts to export as angular element
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
	4. bootstrap element in public-api.ts in library
		// Bootstrap the primary module
		platformBrowserDynamic()
		  .bootstrapModule(StockTickerLibModule)
		  .catch(err => console.error(err));
	5. add "document-register-element" to package.json for application
	6. add register element to application polyfills  (doesn't seem to be necessary)
		import 'document-register-element';
