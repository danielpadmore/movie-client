import MovieClient from "./movie-client";
// import FetchClient from "./fetch-client";
import { Movie } from "./models/movie";
import { MovieDBSearchResults } from "./models/movie-db/movie-search-result";

const BASE_URL = "https://api.themoviedb.org/3";

// Implementation of MovieClient for "The Movie DB"
// TODO: Abstract the fetch implementation to be injected by consumer
export default class MovieDBClient implements MovieClient {
  constructor(
    private readonly ACCESS_TOKEN: string,
    private fetchClient: FetchClient // If we wanted to make this client work server side we'd need an isomorphic fetch client to be injected
  ) {}

  private defaultHeaders = { Authorization: `Bearer ${this.ACCESS_TOKEN}` };

  async searchAllMovies(query: string): Promise<Movie[]> {
    const request = await this.fetchClient(
      `${BASE_URL}/search/movie?query=${query}`,
      {
        method: "GET",
        headers: this.defaultHeaders
      }
    );
    const response: MovieDBSearchResults = await request.json();
    const movies = parseMovieSearchResults(response);
    return movies;
  }
}

/**
 * Need to pull this logic into a completely different interface -
 * The interfaces need very different jobs - parser should only care about taking the implementations results and returning a reliable set
 *
 */
// Extra boilerplate to parse results but it's important to account for parse operations
// which would be required to enforce a common interface regardless of the implementation
// For example here, we need to supply a prefix to create a valid URL for poster and backdrop
export function parseMovieSearchResults(
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