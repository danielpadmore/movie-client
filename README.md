# movie-db-client
Client to the Movie DB https://www.themoviedb.org

## Repository Purpose
This repo is responsible for providing a consistent interface for retreiving data for movies. The main implementation of this interface will be to access the movie DB, however it is possible to extend new implementations to access different services such as internally hosted or new external movie APIs.

## Installation
`movie-client` is available as a package and can be installed via npm
```sh
npm i --save @danielpadmore/movie-client
```
Ensure the scope is set to github within your local project's `.npmrc` file:
```
// .npmrc
@danielpadmore:registry=https://npm.pkg.github.com/
```
## Usage
Once installed, each implementation can be imported into project files and used. To follow inversion of control, use the interface to define types across the application rather than the implementation. Doing this will make switching to different implementations a simple change.
```
const MovieClient = require("@danielpadmore/movie-client");
// Demo usage function
(async () => {
  const client = new MovieClient.MovieDBClient(
    process.env.MOVIE_DB_ACCESS_TOKEN
  );
  console.log("Searching movies...");
  const movies = await client.searchAllMovies("iron man");
  console.log(movies);
})();
```

## Next Steps
The plan moving forward with this repository is to add more API functionality, for example user authentication, detailed configuration and TV Show searching are additional features that could be added next.
