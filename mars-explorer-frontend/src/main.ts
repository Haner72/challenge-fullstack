import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  declare global {
    interface Window {
      platformBrowserDynamicInitialized?: boolean;
    }
  }

 if (!window['platformBrowserDynamicInitialized']) {
  platformBrowserDynamic().
  bootstrapModule(AppModule)
  .catch(err => console.error(err));
  window['platformBrowserDynamicInitialized'] = true;
 }