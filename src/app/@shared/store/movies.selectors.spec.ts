import { selectMovies, selectSelectedMovie } from './movies.selectors';
import { MoviesState, MockedData } from "@shared";

describe('Movies Selectors', () => {
  const state: MoviesState = {
    movies: MockedData,
    page: 1,
    selectedMovie: MockedData[1],
    totalPages: 0,
    totalResults: 0
  };

  it('should select movies', () => {
    expect(selectMovies.projector(state)).toEqual(state.movies);
  });

  it('should select selected movie', () => {
    expect(selectSelectedMovie.projector(state)).toEqual(state.selectedMovie);
  });
});
