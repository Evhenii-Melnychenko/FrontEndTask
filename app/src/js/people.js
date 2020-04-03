
    let buttonPeople = document.querySelector('.wrapper-buttons-button.people');
   
    let showPeople = () => {
  
      let ul = document.getElementById('authors');
      let url = 'https://swapi.co/api/people/';

      fetch(url)
      .then((results) => results.json())
      .then(function(data) {
 
        let pagePeopleTitle = document.querySelector('.page-people');

        pagePeopleTitle.style.cssText = `
          opacity: 1;
          visibility: visible
        `;

        let authors = data.results;

        authors.forEach(function(author, index) {

          let li = document.createElement('li');
          li.dataset.people = index + 1;
          li.innerHTML = `<span class="people">People</span>${author.name}`;
          ul.append(li);
        })
      })
      .then((arrPeople) => {
          console.log(arrPeople);
          getPeopleInfo();
      })
      .catch(function(error) {
        console.log(error);
      });   
    };

    function getPeopleInfo() {
 
      let listsPeople = document.querySelectorAll('#authors li');
      let wrapInfo = document.querySelector('.description-people');
    
      listsPeople.forEach((people) => {

        people.addEventListener('click', function() {
    
        let id = people.getAttribute('data-people');
        
        let urlPeople = `https://swapi.co/api/people/${id}`;

       fetch(urlPeople)
       .then((results) => results.json())
       .then(function(data) {
     
        let currentYear = new Date().getFullYear();
        let personDate = data.birth_year.replace(/\D+/g,"");
        let agePerson = currentYear - personDate;
            
        wrapInfo.innerHTML = `
          <img src="https://starwars-visualguide.com/assets/img/characters/${id}.jpg" alt="">
          <h3>People's info</h3>
          <p class="description-people__name">Name: ${data.name}</p>
          <p class="description-people__age">Age: ${agePerson}</p>
          <p class="description-people__mass">Moss: ${data.mass}</p>
        `;
       })
       
        })
      })
    }

buttonPeople.addEventListener('click', showPeople, { once: true });