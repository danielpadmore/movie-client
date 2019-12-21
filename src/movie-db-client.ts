import MovieClient from "./movie-client";
import { Movie } from "./models/movie";
import fetch from "node-fetch";
import { MovieDBSearchResults } from "./models/movie-db/movie-search-result";

const BASE_URL = "https://api.themoviedb.org/3";

// Implementation of MovieClient for "The Movie DB"
// TODO: Abstract the fetch implementation to be injected by consumer
export default class MovieDBClient implements MovieClient {
  constructor(private readonly ACCESS_TOKEN: string) {}

  private defaultHeaders = { Authorization: `Bearer ${this.ACCESS_TOKEN}` };

  async searchAllMovies(query: string): Promise<Movie[]> {
    const request = await fetch(`${BASE_URL}/search/movie?query=${query}`, {
      method: "GET",
      headers: this.defaultHeaders
    });
    const response: MovieDBSearchResults = await request.json();
    console.log(response);
    const movies = this.parseMovieSearchResults(response);
    return movies;
  }

  // Extra boilerplate to parse results but it's important to account for parse operations
  // which would be required to enforce a common interface regardless of the implementation
  // For example here, we need to supply a prefix to create a valid URL for poster and backdrop
  private parseMovieSearchResults(
    searchResults: MovieDBSearchResults
  ): Movie[] {
    return searchResults.results.map(
      (result): Movie => ({
        id: result.id,
        posterUrl: result.poster_path,
        backdropUrl: result.backdrop_path,
        popularity: result.popularity,
        voteCount: result.vote_count,
        adult: result.adult,
        title: result.title,
        originalTitle: result.original_title,
        genre_ids: result.genre_ids,
        voteAverage: result.vote_average,
        overview: result.overview,
        release_date: result.release_date
      })
    );
  }
}
