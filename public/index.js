import { topMovies } from "./modules/topmovies.js";

const btn = document.querySelector("#top");
console.log('hey');
btn.addEventListener('click', ()=>{
    document.querySelector("body").appendChild(topMovies());
});