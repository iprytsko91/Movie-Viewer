import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideStore } from "@ngrx/store";
import { MoviesEffects, moviesReducer } from "@shared";
import { provideEffects } from "@ngrx/effects";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authInterceptor } from "@core";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter(routes),
        provideStore({ appState: moviesReducer }),
        provideEffects([MoviesEffects]),
        provideHttpClient(
          withInterceptors([authInterceptor])
        )
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
