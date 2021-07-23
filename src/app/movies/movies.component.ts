import { Component } from '@angular/core';

interface Movie {
  id: number | null;
  name: string;
  description: string;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  selectedMovie: Movie = {
    id: null,
    name: '',
    description: ''
  };

  movies: Movie[] = [
    { id: 1, name: 'Transformers', description: 'Super cool robot' },
    {
      id: 2,
      name: 'The Incredible',
      description: 'Ultra cool super hero family'
    },
    {
      id: 3,
      name: 'Finding Nemo',
      description: 'Dad fish goes looking his son'
    }
  ];

  selectMovie(movie: Movie) {
    this.selectedMovie = Object.assign({}, movie);
  }

  save(movie: Movie) {
    if (movie.id) {
      this.updateMovie(movie);
      return;
    }
    this.addMovie(movie);
  }

  addMovie(movie: Movie) {
    movie.id = Math.ceil(Math.random() * 100);
    this.movies = [...this.movies, movie];
    this.reset();
  }

  updateMovie(movie: Movie) {
    this.movies = this.movies.map(m =>
      m.id === movie.id ? Object.assign({}, movie) : m
    );
    this.reset();
  }

  deleteMovie(id: number | null) {
    this.movies = this.movies.filter(movie => movie.id !== id);
    this.reset();
  }

  reset() {
    this.selectedMovie = {} as Movie;
  }
}
