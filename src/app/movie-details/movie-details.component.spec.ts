import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { provideRouter } from "@angular/router";
import { routes } from "../app.routes";
import { provideStore } from "@ngrx/store";
import { MoviesEffects, moviesReducer } from "@shared";
import { provideEffects } from "@ngrx/effects";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authInterceptor } from "@core";

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailsComponent],
      providers: [
        provideRouter(routes),
        provideStore({ appState: moviesReducer }),
        provideEffects([MoviesEffects]),
        provideHttpClient(
          withInterceptors([authInterceptor])
        )
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
