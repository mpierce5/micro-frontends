Setup Library Element
	1. create library (ng generate library {library-name}
	2. add a component to the library (or use the default)
	4. add BrowserModule to imports in lib.module.ts
	3. update lib.module.ts to export as angular element
		export class TrainingLibraryModule implements DoBootstrap {
          constructor(private injector: Injector) {}
          ngDoBootstrap(appRef: ApplicationRef): void {
            // Turn our component into an Angular Element (Web Component)
            const stockTickerLibElement = createCustomElement(TrainingLibraryComponent, {
              injector: this.injector,
            });
            customElements.define(
              'training-lib',
              stockTickerLibElement
            );
          }
        }
	4. bootstrap element in public-api.ts in library
		// Bootstrap the primary module
        platformBrowserDynamic()
          .bootstrapModule(TrainingLibraryModule)
          .catch(err => console.error(err));
	5. add "document-register-element" to package.json for application (this should already be done from previous projects)
	6. add register element to application polyfills  (doesn't seem to be necessary)
		import 'document-register-element';


Setup Application to consume custom element
	1. build the library (ng build {library-name} (use --watch to be able to see live updates)
	2. add reference to build bundle to scripts in angular.json (dist/{library-name}/bundles/{library-name}.umd.js)
	3. add the custom element tag defined in training/library/src/lib/training-library.module.ts to index.html in training-app application (or any page)
	4. ng serve your app

** This is the library element, meaning if you look at the size it is about 4k!! and getting all of its dependencies from training-app **
