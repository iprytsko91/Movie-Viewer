import { PosterPipe } from './poster.pipe';
import { imagesUrl } from "@core";

describe('PosterPipe', () => {
  it('create an instance', () => {
    const pipe = new PosterPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform string', () => {
    const pipe = new PosterPipe();
    const posterPath =  '/my-cool-poster';
    expect(pipe.transform(posterPath)).toEqual(`${imagesUrl}${posterPath}`);
  });
});
