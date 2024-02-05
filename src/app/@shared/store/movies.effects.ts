import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, withLatestFrom } from "rxjs";
import { MoviesService } from "../services";

import { loadPopularMovies, loadPopularMoviesFailure, loadPopularMoviesSuccess } from "./movies.actions"
import { Store } from "@ngrx/store";
import { selectPaginationInfo } from "./movies.selectors";


@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions,
              private moviesService: MoviesService,
              private store: Store) {
  }

  readonly getPopularMovies$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadPopularMovies),
      withLatestFrom(this.store.select(selectPaginationInfo)),
      exhaustMap(([action, info]) =>
        this.moviesService.getPopularMovies(info.page + 1)
          .pipe(
            map(res => loadPopularMoviesSuccess({ payload: res })),
            catchError(error => of(loadPopularMoviesFailure({ payload: error })))
          )
      )
    ),
    { useEffectsErrorHandler: false }
  )
}
