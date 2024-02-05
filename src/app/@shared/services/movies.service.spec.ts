import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authInterceptor } from "@core";

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(
          withInterceptors([authInterceptor])
        )
      ]
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
