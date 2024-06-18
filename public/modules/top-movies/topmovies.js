import { getTopMovies } from "./get-movies.js";
import { getTopMoviesImages } from "./get-images.js";

export async function topMovies() {
    const topMovies = await getTopMovies();
    const topMoviesImgs = await getTopMoviesImages();
    const listElementDiv = document.createElement('div');
    listElementDiv.classList.add('main-container');

    let count = 0;

    topMovies.forEach((movie)=> {
        let movieCard = document.createElement('div');
        movieCard.classList.add('card');

        let image = document.createElement('div');
        image.classList.add('img');
        movieCard.appendChild(image);
        image.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${topMoviesImgs[count]})`

        let info = document.createElement('div');
        info.classList.add('movie-info');
        movieCard.appendChild(info);


        let movieTitle = document.createElement('h1');
        movieTitle.innerText = movie;
        info.appendChild(movieTitle);

        listElementDiv.appendChild(movieCard);
        count++;
    });
    return listElementDiv;
}
