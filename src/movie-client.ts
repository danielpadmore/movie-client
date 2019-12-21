import { Movie } from "./models/movie";

// Interface for the Movie Client
export default interface MovieClient {
  searchAllMovies(query: string): Promise<Movie[]>;
}
