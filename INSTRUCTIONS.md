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
