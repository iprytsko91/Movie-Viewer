import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";

import {
  LazyLoadDirective,
  loadPopularMovies,
  MovieDto,
  PaginationInfoModel,
  selectMovie,
  selectMovies,
  selectPaginationInfo,
  selectSelectedMovie
} from "@shared";
import { Observable } from "rxjs";


@Component({
  selector: 'mv-side-navigator',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    LazyLoadDirective
  ],
  templateUrl: './side-navigator.component.html',
  styleUrl: './side-navigator.component.scss'
})
export class SideNavigatorComponent {
  movies$ = this.store.select(selectMovies);
  selectedMovie$ = this.store.select(selectSelectedMovie);
  paginationInfo$: Observable<PaginationInfoModel> = this.store.select(selectPaginationInfo);
  loadMore = () => this.store.dispatch(loadPopularMovies());

  constructor(private store: Store) {
  }

  selectMovie(movie: MovieDto) {
    this.store.dispatch(selectMovie({ payload: movie }))
  }
}

