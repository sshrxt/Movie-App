export function getMovieCards(searches) {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add("main-container");

    searches.forEach((movie)=> {
        let movieCard = document.createElement('div');
        movieCard.classList.add('card');

        let image = document.createElement('div');
        image.classList.add('img');
        movieCard.appendChild(image);
        image.style.backgroundImage = `url(${movie.image})`

        let info = document.createElement('div');
        info.classList.add('movie-info');
        movieCard.appendChild(info);


        let movieTitle = document.createElement('h1');
        movieTitle.innerText = movie.title;
        info.appendChild(movieTitle);

        mainContainer.appendChild(movieCard);
    });
    return mainContainer;
}