import { loadPopularMoviesFailure, selectMovie } from './movies.actions';

describe('Movies Actions', () => {
  it('should create an action select movie', () => {
    const expectedAction = {
      type: '[Movies] Select'
    };
    expect(selectMovie.type).toEqual(expectedAction.type);
  });

  it('should create an action to check is payload passed', () => {
    const expectedAction = {
      type: '[Movies] Load Popular Movies Failure',
      payload: new Error('xxx')
    };
    expect(loadPopularMoviesFailure({ payload: new Error('xxx') }).payload).toEqual(expectedAction.payload);
  });

});
