export function getTopMoviesImages() {
    return fetch("http://localhost:8000/api/popular")
      .then((response) => response.json())
      .then((data) => {
        const movieTitles = data.results.map((movie) => movie.poster_path);
        return movieTitles;
      })
      .catch((error) => {
        console.error(error);
      });
  }