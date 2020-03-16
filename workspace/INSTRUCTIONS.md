Setup Full Element
    1. Create a new application for the full element (training-element) (ng generate application training-element)
    2. Remove everything except app.module (elements)
    3. In app module import the element component from the library
    4. Include all shared dependencies from library in app.module (elements)
    5. Update app.module to build component as an element
        export class AppModule {
          constructor(private injector: Injector) {}
          ngDoBootstrap() {
            const el = createCustomElement(TrainingLibraryComponent,
              { injector: this.injector });
            customElements.define('training-element-full', el);
          }
        }
    6. In angular.json add build file dependencies for full element (under the training-app project)
              "./dist/training-element/runtime-es2015.js",
              "./dist/training-element/polyfills-es2015.js",
              "./dist/training-element/main-es2015.js"
    7. Add reference to custom element tag ('training-element-full') to main application index.html (stock-ticker-app)
    8. Build/watch element repository (ng build training-element --prod --output-hashing none)
    9. Serve main application (stock-ticker-app)
        * new element should display and be identical to library element except for the custom element name (stock-ticker-full)
