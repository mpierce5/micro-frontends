### Setup Library element

 1. Add a library to the workspace: 
    
    `ng generate library {library-name}`
    
 2. Add a component to {library-name}: 
 
    Note: you can use the default component created with the library
    
 3. Update _lib.module.ts_ to export as angular element
 
        export class LibraryModule implements DoBootstrap {
           constructor(private injector: Injector) {}
           ngDoBootstrap(appRef: ApplicationRef): void {
             // Turn our component into an Angular Element (Web Component)
             const libraryElement = createCustomElement(LibraryComponent, {
               injector: this.injector,
             });
             customElements.define(
               'library-element',
               libraryElement
             );
           }
         }

 4. Bootstrap element in _public-api.ts_ in {library-name}
 
        // Bootstrap the primary module
        platformBrowserDynamic()
          .bootstrapModule(LibraryModule)
          .catch(err => console.error(err));
          
### Setup the {main-application} to consume custom element
 
 1. Build the library: 
 
    `ng build {library-name}`
 
 2. Add a reference to the `{library}` build files to the scripts section of the {main-application} in angular.json under _projects/{main-application}/architect/build/scripts_ 
 
    `"dist/{library-name}/bundles/{library-name}.umd.js"`
 
 3. Add custom element tag defined for the library element to _index.html_ in {main-application}: 
 
    `<library-element></library-element>`
    
 4. Serve your app to see library element render
 
    `ng serve {main-application}`
