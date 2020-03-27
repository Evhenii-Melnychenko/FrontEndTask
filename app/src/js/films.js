document.addEventListener("DOMContentLoaded", () => {

    let buttonFilms = document.querySelector('.wrapper-buttons-button.films');

    console.log('films');
    

    buttonFilms.addEventListener('click', showFilms, { once: true });

});
