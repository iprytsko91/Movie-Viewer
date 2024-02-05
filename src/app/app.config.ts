import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { MoviesEffects, moviesReducer } from "@shared";
import { authInterceptor } from "@core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ appState: moviesReducer }),
    provideEffects([MoviesEffects]),
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ],
};
