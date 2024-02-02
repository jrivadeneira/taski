import {ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {taskRoutes} from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(taskRoutes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
  ]
};
