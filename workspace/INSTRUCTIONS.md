Create a new application to consume your custom element
	1. create application (ng generate application training-app)
	2. add elements to the project "ng add @angular/elements" (adds it to the application)
	3. add "schemas: [CUSTOM_ELEMENTS_SCHEMA]" to app.module.ts in application
	4. add polyfills (ng g ngx-build-plus:wc-polyfill --project {application-name}) (this must come before other other dependencies)
	5. install ngx-build-plus (ng add ngx-build-plus --project {application-name})
	6. add polyfills (ng g ngx-build-plus:wc-polyfill --project {application-name})
	7. add ng packages to scripts config in angular.json (ng g ngx-build-plus:externals --project {application-name})
	8. build application 
