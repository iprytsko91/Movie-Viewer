import { createAction, props } from "@ngrx/store";

import { MovieDto, ResponseDto } from "../models";

export const loadPopularMovies = createAction('[Movies] Load Popular Movies');
export const loadPopularMoviesSuccess = createAction('[Movies] Load Popular Movies Success', props<{ payload: ResponseDto }>());
export const loadPopularMoviesFailure = createAction('[Movies] Load Popular Movies Failure', props<{ payload: Error }>());
export const selectMovie = createAction('[Movies] Select', props<{ payload: MovieDto }>());
export const reset = createAction('[Movies] Reset');
