import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { TrainingLibraryComponent } from '../../../training-library/src/lib/training-library.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [TrainingLibraryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(TrainingLibraryComponent,
      { injector: this.injector });
    customElements.define('training-element-full', el);
  }
}
