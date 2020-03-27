document.addEventListener("DOMContentLoaded", () => {

    let buttonStarships = document.querySelector('.wrapper-buttons-button.starships');

    let showbuttonStarships = () => {
      
     console.log('starships');
     
    };

    buttonStarships.addEventListener('click', showbuttonStarships, { once: true });

});
