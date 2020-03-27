document.addEventListener("DOMContentLoaded", () => {

    let buttonPeople = document.querySelector('.wrapper-buttons-button.people');

    let showPeople = () => {
      
      let createNode = (element) => {
          return document.createElement(element);
      };
    
      let append = (parent, el) => {
        return parent.appendChild(el);
      };

      const ul = document.getElementById('authors');
      const url = 'https://swapi.co/api/people/';

      fetch(url)
      .then((results) => results.json())
      .then(function(data) {
 
        let pagePeopleTitle = document.querySelector('.page-people');
            pagePeopleTitle.style.opacity = '1';
            pagePeopleTitle.style.visibility = 'visible';

        let authors = data.results;

        return authors.map(function(author, index) {

          let li = createNode('li');
          li.dataset.people = index + 1;
          let currentYear = new Date().getFullYear();
          
          let personDate = author.birth_year.replace(/\D+/g,"");
          let agePerson = currentYear - personDate;
          
          // li.innerHTML =  `People ${author.name} ${agePerson}`;

          li.innerHTML =  `<span class="people">People</span> ${author.name}`;

          append(ul, li);
        })
      })
      .catch(function(error) {
        console.log(error);
      });   
      
    };

    buttonPeople.addEventListener('click', showPeople, { once: true });

});