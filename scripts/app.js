const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterURL');
const movieYear=document.querySelector('.userInputMovieYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYeartoDisplay = document.querySelector('.favoriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieYeartoDisplay.textContent = yearInStorage;
    container.style.backgroundImage=`linear-gradient(rgba(204, 204, 224, 0.767), rgba(53, 41, 41, 0.644)), url('${imageUrlInStorage}')`;
}


btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlImport = moviePosterUrl.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlImport);
    localStorage.setItem('year', movieYearInput);

    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(204, 204, 224, 0.767), rgba(53, 41, 41, 0.644)), url('${posterUrlImport}')`;
    movieYeartoDisplay.textContent = movieYearInput;
    movieTitle.value='';
    moviePosterUrl.value='';
    movieYear.value='';
});

