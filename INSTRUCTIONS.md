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
