import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SideNavigatorComponent } from "./side-navigator/side-navigator.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { loadPopularMovies, MovieDto } from "@shared";
import { Store } from "@ngrx/store";

@Component({
  selector: 'mv-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, HeaderComponent, SideNavigatorComponent, MovieDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadPopularMovies());
  }
}


