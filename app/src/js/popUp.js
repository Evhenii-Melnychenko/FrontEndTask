
document.addEventListener("DOMContentLoaded", function() {

  var modalShadow = document.querySelector('.modal-shadow');
  var modalWindow = document.querySelector('.modal-window.popup');
  var popup = document.querySelector('.popup');
  var userName = document.querySelector('.nameUser');
  var buttonSent = document.querySelector('.button_sent');
  var userData = document.querySelector('.error-text');
  var formBlockModal = document.querySelector('.page-form-block_modal');
  var blockGreetingUser = document.querySelector('.block-greeting-user');
  var showUserName = document.querySelector('.block-greeting-user span');
  var closePopUp = document.querySelector('.close-popUp');
  
  modalShadow.style.opacity = '1';
  modalShadow.style.visibility = 'visible';
  modalWindow.style.opacity = '1';
  modalWindow.style.visibility = 'visible';

  // cookie
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// get cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
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

    var dataUser = userName.value;
    
    if (!dataUser) {
      userData.style.opacity = '1';
      userData.style.visibility = 'visible';
      userName.classList.add('error');

    } else {
      modalShadow.style.opacity = '0';
      modalShadow.style.visibility = 'hidden';
      modalWindow.style.opacity = '0';
      modalWindow.style.visibility = 'hidden';
      setCookie('userName', dataUser, 365);
    }
  });

  var userNamePopUp = getCookie('userName');

  if (userNamePopUp) {
    userData.style.opacity = '0';
    userData.style.visibility = 'hidden';
    formBlockModal.style.display = 'none';
    blockGreetingUser.style.opacity = '1';
    blockGreetingUser.style.visibility = 'visible';
    showUserName.innerHTML = userNamePopUp;
  }
  
});