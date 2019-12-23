// Model shape of a Movie with the fields the consumer will require
export interface Movie {
  id: number;
  posterUrl: string;
  backdropUrl: string;
  popularity: number;
  voteCount: number;
  adult: boolean;
  title: string;
  originalTitle: string;
  genreIds: number[];
  voteAverage: number;
  overview: string;
  releaseDate: string;
}
