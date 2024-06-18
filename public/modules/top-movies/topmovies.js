import { getTopMovies } from "./get-movies.js";

export async function topMovies() {
    const topMovies = await getTopMovies();
    const listElementDiv = document.createElement('div');

    topMovies.forEach((movie)=> {
        let li = document.createElement('li');
        li.innerText = movie;
        listElementDiv.appendChild(li);
    });
    return listElementDiv;
}
