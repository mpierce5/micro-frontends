# micro front-ends with angular elements

### Overview

The objective is to show how create a micro front-end using angular elements. The intent is that these micro front-ends 
can be deployed independently of the consuming application. This can be accomplished using angular elements. Two different
approaches are explored in this example.

### Angular Element without core libraries

By building an angular element as a library the build files do not include core dependencies on angular. This means that
in order to use this element you would need to provide these through the consuming application. It also means that build
size for a hello-world element is ~3kb instead of ~200kb allowing for the use of many of these elements with size issues.
In this example we have the main angular application build the shared libraries and expose them globally so that the 
library element can use them. These shared dependencies are built into the scripts.js bundle and as long as this file
is included with the element it can be used anywhere even outside of a hosting angular application.
  
### Angular Element with core libraries

Instructions are also included on how to create normal angular element. This example references the angular library
referenced in the previous section. The intent is that when building an angular element it would be desirable to build
both library version of the element which does not include core libraries and a full version of the element which does
include all dependencies. The full version of the element can be used in any context without depending on core libraries
being provided for it. The size however is much larger as it includes core angular libraries in its build. 

### Setting up main application that shares core angular libraries

 1. Create workspace: 
 
    `ng new {workspace-name} --create-application=false`

 2. Create the {main-application}:
 
    Note: We will use this application to build and globally share core angular libraries for our library element and to demo our angular elements builds  
 
    `ng generate application {main-application}`
 
 3. Add elements to the project:  
 
    `ng add @angular/elements`
 
 4. Enable unknown element tags to run in your {main-application} by adding the following to _app.module.ts_: 
 
    `schemas: [CUSTOM_ELEMENTS_SCHEMA]"`
 
 5. Install _ngx-build-plus_: 
    
    Note: We will be using _ngx-build-plus_ to load or core angular dependencies in a global manner so that they can also be used by our elements. It will create _webpack.externals.js_ and update the angular.json scripts section identifying which libraries should be exposed.
 
    `ng add ngx-build-plus --project {main-application}`
 
 6. Add polyfills: 
 
    `ng g ngx-build-plus:wc-polyfill --project {main-application}`   
 
 7. Add ng packages to scripts config in angular.json and create webpack.externals.js file: 
 
    `ng g ngx-build-plus:externals --project {main-application}`
 
 8. Build {main-application}: 
 
    `ng build {main-application}`

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
	
### Setup Full Element
 
 1. Create a new application for the full element: 
 
    `ng generate application {full-element-application}`
    
 2. In the {full-element-application} remove dependencies for `AppComponent` from _app.module_
 
 2. In the {full-element-application} remove the following files _app.module_
    
    `app.component.ts`, `app.component.css`, `app.component.spec.ts`
 
 3. In the {full-element-application} _app.module.ts_ add the library component to the declarations and browser module to imports. 
    
    Note: Imports need to be relative to current directory ex: `'../../../library/src/lib/libarary.component.ts'`
    
    Note: all shared dependencies from the library must be included as well ex: BrowserModule
    
        @NgModule({
          declarations: [
            LibraryComponent
          ],
          imports: [
            BrowserModule
          ],
          providers: []
        })
     
 4. In the {full-element-application} _app.module.ts_ set it up to bootstrap as an element
        
        export class AppModule {
          constructor(private injector: Injector) {}
          ngDoBootstrap() {
            const el = createCustomElement(LibraryComponent,
              { injector: this.injector });
            customElements.define('full-element', el);
          }
        }
        
 5. Build the {full-element-application}
  
    Note: Use `output-hash=none` to get ensure the filenames don't change
     
    `ng build {full-element-application} --prod --output-hashing=none`
 
 6. Add a reference to the {full-element-application} build files to the scripts section of the {main-application} in angular.json under _projects/{main-application}/architect/build/scripts_
 
    Note: You should be able to find these files in dist/{full-element-application}/.
    
    Note: We are adding these to the `{main-application}` not the `{full-element-application}` or `{library}`
        
          "scripts": [
              ...,
              "./dist/elements-application/runtime-es2015.js",
              "./dist/elements-application/polyfills-es2015.js",
              "./dist/elements-application/main-es2015.js"
          ]
  
 7. Add reference to the custom element tag defined in the {full-element-application} _app.module.ts_ to the {main-application} _index.html_ 
 
    Note: this should be located at: _{main-application}/src/index.html_ 
 
     `<full-element></full-element>`
     
 9. Serve {main-application}
 
    Note: The new element should display and be identical to library element except for the custom element name _full-element_
    
    Note: If you have deleted your dist folder only elements with build files will display
    
    `ng serve {main-application} -o`


