import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ResponseDto } from "../models";
import { rootApiUrl } from "@core";

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {
  }

  getPopularMovies(page: number = 1): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(`${rootApiUrl}/3/discover/movie`, {
      params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: page,
        sort_by: 'popularity.desc'
      }
    });
  }
}
