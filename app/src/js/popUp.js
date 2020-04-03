let modalShadow = document.querySelector('.modal-shadow');
let modalWindow = document.querySelector('.modal-window.popup');
let popup = document.querySelector('.popup');
let userName = document.querySelector('.nameUser');
let buttonSent = document.querySelector('.button_sent');
let userData = document.querySelector('.error-text');
let formBlockModal = document.querySelector('.page-form-block_modal');
let blockGreetingUser = document.querySelector('.block-greeting-user');
let showUserName = document.querySelector('.block-greeting-user span');
let closePopUp = document.querySelector('.close-popUp');
  
modalShadow.style.cssText = `
    opacity: 1;
    visibility: visible
`;
modalWindow.style.cssText = `
    opacity: 1;
    visibility: visible
`;

// set cookie
function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime( d.getTime() + ( exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

// get cookie
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for( let i=0; i < ca.length; i++ ) {
      let c = ca[i];
      while ( c.charAt(0)==' ' ) c = c.substring(1);
      if ( c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}

// close popUp by clicking beyond popUp
  document.addEventListener('click', (e) => {
  if ( e.target.closest('.popup') === null ) {
      popup.style.opacity = '0';
      modalShadow.style.opacity = '0';
  }
});

// close popUp by clicking cross
closePopUp.addEventListener('click', () => {
    popup.style.opacity = '0';
    modalShadow.style.opacity = '0';
});
  
// event by clicking button submit
buttonSent.addEventListener('click', (e) => {
  e.preventDefault();

  let dataUser = userName.value;
  if ( !dataUser ) {
    userData.style.cssText = `
      opacity: 1;
      visibility: visible
    `;
    userName.classList.add('error');

  } else {
    modalShadow.style.cssText = `
        opacity: 1;
        visibility: visible
    `;
    modalWindow.style.cssText = `
        opacity: 0;
        visibility: hidden
    `;
    setCookie('userName', dataUser, 365);
  }
});

  let userNamePopUp = getCookie('userName');

  if ( userNamePopUp ) {
    userData.style.cssText = `
      opacity: 0;
      visibility: hidden
    `;
    blockGreetingUser.style.cssText = `
      opacity: 1;
      visibility: visible
    `;
    formBlockModal.style.display = 'none';
    showUserName.innerHTML = userNamePopUp;
  }