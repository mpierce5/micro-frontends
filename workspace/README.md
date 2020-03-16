Setting up angular Elements as lib
	1. create workspace
	2. create application
	3. add elements to the project "ng add @angular/elements" (adds it to the application)
	4. add "schemas: [CUSTOM_ELEMENTS_SCHEMA]" to app.module.ts in application
	5. add polyfills (ng g ngx-build-plus:wc-polyfill --project {application-name}) (this must come before other other dependencies)
	6. install ngx-build-plus (ng add ngx-build-plus --project {application-name})
	7. add polyfills (ng g ngx-build-plus:wc-polyfill --project {application-name})
	8. add ng packages to scripts config in angular.json (ng g ngx-build-plus:externals --project {application-name})
	9. build application 
Setup Library
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

Setup Application to consume custom element
	1. Build the library (ng build {library-name} (use --watch to be able to see live updates)
	2. add reference to build bundle to scripts in angular.json (dist/{library-name}/bundles/{library-name}.umd.js)
	3. add custom element tag to index.html in application (or any page)
	4. ng serve your app
	
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
     
Enable live updates
    1.  

Add dependencies (HTTPClientModule)

More stuff?	
