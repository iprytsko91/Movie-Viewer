import { Component } from '@angular/core';
import { AsyncPipe, DatePipe, DecimalPipe, JsonPipe, NgIf, NgOptimizedImage } from "@angular/common";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { MovieDto, PosterPipe, selectSelectedMovie } from "@shared";

@Component({
  selector: 'mv-movie-details',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DatePipe,
    DecimalPipe,
    AsyncPipe,
    JsonPipe,
    NgIf,
    PosterPipe
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  selectedMovie$: Observable<MovieDto> = this.store.select(selectSelectedMovie);

  constructor(private store: Store) {
  }
}
