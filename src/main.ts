// Starter program if components are standalone => NgModules not used

// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';


// bootstrapApplication(AppComponent).catch((err) => console.error(err));


// starter program if components are not standalone => NgModules used

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);