const MovieClient = require("./dist");
const fetch = require("node-fetch");

// For the initial development, we'll use dotenv to provide an access token -- This will be injected by the consumer when ready
require("dotenv").config();

// Demo usage for testing -- To be deleted
(async () => {
  const client = new MovieClient.MovieDBClient(
    process.env.MOVIE_DB_ACCESS_TOKEN,
    fetch
  );

  console.log("Searching movies...");
  const movies = await client.searchAllMovies("iron man");

  console.log(movies);
})();
