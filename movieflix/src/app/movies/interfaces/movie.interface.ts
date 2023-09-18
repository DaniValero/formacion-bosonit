// Generated by https://quicktype.io

export interface Result {
  page:          number;
  results:       Movie[];
  total_pages:   number;
  total_results: number;
}

export interface Movie {
  adult:             boolean;
  backdrop_path:     string;
  genres:            Genre[];
  id:                number;
  original_language: OriginalLanguage;
  original_title:    string;
  overview: string;
  tagline: string;
  popularity:        number;
  poster_path:       string;
  release_date:      string;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export interface Genre {
  id: number;
  name: string;
}

export enum OriginalLanguage {
  En = "en",
  Hi = "hi",
}

export interface Genres {
  genres: Genre[];
}

