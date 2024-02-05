import { createReducer, on } from "@ngrx/store";

import { MovieDto } from "../models";
import {
  loadPopularMovies,
  loadPopularMoviesFailure,
  loadPopularMoviesSuccess,
  reset,
  selectMovie
} from "./movies.actions";

export type MoviesState = {
  movies: MovieDto[];
  selectedMovie: MovieDto;
  page: number;
  totalPages: number;
  totalResults: number;
};

export const initialState: MoviesState = {
  movies: [],
  selectedMovie: null,
  page: 0,
  totalPages: 0,
  totalResults: 0
}

export const moviesReducer = createReducer(
    initialState,
    on(loadPopularMoviesSuccess, ((state, { payload }) => {
      return {
        ...state,
        movies: [...state.movies, ...payload.results],
        page: payload.page,
        totalPages: payload.total_pages,
        totalResults: payload.total_results
      }
    })),
    on(loadPopularMoviesFailure, (state) => {
      console.error("unable to load data");
      return state;
    }),
    on(selectMovie, (state, { payload }) => {
      return { ...state, selectedMovie: payload }
    }),
    on(reset, (state) => initialState)
  )
;
