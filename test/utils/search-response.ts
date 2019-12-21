import { MovieDBSearchResults } from "../../src/models/movie-db/movie-search-result";

export const buildMoviesSearchResponse = (
  total: number = 1
): MovieDBSearchResults => {
  return {
    page: 1,
    total_results: 200,
    total_pages: 10,
    results: Array.from({ length: total }).map((_, idx) => {
      return {
        id: idx,
        video: true,
        poster_path: `http://movie-images.com/poster-${idx}.png`,
        backdrop_path: `http://movie-images.com/backdrop-${idx}.png`,
        popularity: idx,
        vote_count: idx,
        original_language: "en",
        adult: false,
        title: `Movie ${idx}`,
        original_title: `Movie ${idx}`,
        genre_ids: [idx],
        vote_average: idx,
        overview: `Longer description, Longer description, Longer description, Longer description, Longer description, Longer description, Longer description, ${idx}`,
        release_date: `2015-10-01`
      };
    })
  };
};
