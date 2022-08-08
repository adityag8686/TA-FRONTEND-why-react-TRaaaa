let form = document.querySelector('form');
let displayData = document.querySelector('.display');
let movieDetails = [{}];

function handleInput(event) {
    event.preventDefault();
    movieDetails.movie = form.elements.movie.value;
    createUI();
}


form.addEventListener('submit', handleInput);


function createUI() {

    let innerDisplay = document.createElement('div');
    innerDisplay.classList.add('innerDisplay');

    let movieName = document.createElement('h3');
    movieName.innerHTML = movieDetails.movie;
    movieName.classList.add('movieName');
    movieName.style.marginLeft = '2rem';

    let watchedButton = document.createElement('button');
    watchedButton.innerHTML = 'To watch';
    watchedButton.addEventListener('click', () => {
        if (watchedButton.innerHTML == 'To watch') {
            watchedButton.innerHTML = 'Watched';
        } else if (watchedButton.innerHTML == 'Watched') {
            watchedButton.innerHTML = 'To watch';
        }
    });

    innerDisplay.append(movieName, watchedButton);
    displayData.append(innerDisplay);

    form.elements.movie.value = '';
}

