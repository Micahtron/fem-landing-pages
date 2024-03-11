const header = document.querySelector('.header');
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function(){
  // Close menu ---
  if(header.classList.contains('open')){
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeElems.forEach(function(elem){
      elem.classList.remove('fade-in');
      elem.classList.add('fade-out');
    });
  }

  // Open menu ---
  else {
    header.classList.add('open');
    body.classList.add('noscroll');
    fadeElems.forEach(function(elem){
      elem.classList.remove('fade-out');
      elem.classList.add('fade-in');
    });
  }

});
