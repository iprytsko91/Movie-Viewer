import { createSelector } from "@ngrx/store";

import { MoviesState } from "./moviesReducer";
import { PaginationInfoModel } from "../models";

export interface AppState {
  appState: MoviesState;
}

export const selectAppState = (state: AppState) => state.appState;

export const selectMovies = createSelector(
  selectAppState,
  (state: MoviesState) => {
    return state.movies
  }
);

export const selectSelectedMovie = createSelector(
  selectAppState,
  (state: MoviesState) => {
    return state.selectedMovie
  }
);

export const selectPaginationInfo = createSelector(
  selectAppState,
  (state: MoviesState) => {
    return <PaginationInfoModel>{
      page: state.page,
      total: state.totalResults,
      loadedCount: state.movies.length
    }
  }
);
