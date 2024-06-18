import { topMovies } from "./modules/top-movies/topmovies.js";

const btn = document.querySelector('#top');

btn.addEventListener('click', async ()=> {
    const topMoviesDiv = await topMovies();
    document.querySelector("body").appendChild(topMoviesDiv);
});