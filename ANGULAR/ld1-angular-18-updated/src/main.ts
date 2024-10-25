import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AdduserComponent } from './app/adduser/adduser.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(AdduserComponent
  , appConfig)
  .catch((err) => console.error(err));
