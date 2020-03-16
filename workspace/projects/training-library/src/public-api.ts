/*
 * Public API Surface of training-library
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TrainingLibraryModule } from './lib/training-library.module';

export * from './lib/training-library.service';
export * from './lib/training-library.component';
export * from './lib/training-library.module';

// Bootstrap the primary module
platformBrowserDynamic()
  .bootstrapModule(TrainingLibraryModule)
  .catch(err => console.error(err));
