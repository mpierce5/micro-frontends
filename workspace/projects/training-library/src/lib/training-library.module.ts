import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { TrainingLibraryComponent } from './training-library.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TrainingLibraryComponent],
  imports: [BrowserModule],
  exports: [TrainingLibraryComponent]
})
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
