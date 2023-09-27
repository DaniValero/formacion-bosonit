import { Movie } from "src/app/movies/interfaces/movie.interface";
import { Serie } from "src/app/series/interfaces/serie.interface";

export interface User {
  name: string;
  email: string;
  password: string;
  favoriteMovies: Movie[]
  favoriteSeries: Serie[]
}

