import './scss/style.scss';

const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 69.375em)');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');
const body = document.querySelector('body');
const main = document.querySelector('main');

function Open_Mobile_Menu()
{
  btnOpen.setAttribute('aria-expanded', 'true');
  body.classList.add('noscroll');
  navContent.removeAttribute('inert', '');
  main.setAttribute('inert', '');

  btnClose.focus();
}

function Close_Mobile_Menu()
{
  btnOpen.setAttribute('aria-expanded', 'false');
  body.classList.remove('noscroll');
  navContent.setAttribute('inert', '');
  main.removeAttribute('inert', '');

  btnOpen.focus();
}

function Setup_Nav(e){
  if(e.matches){
    // This is mobile ---
    console.log("is mobile");

    navContent.setAttribute('inert', '');

    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    }, 500);
  }
  else {
    console.log("is desktop");
    navContent.removeAttribute('inert', '');
    main.removeAttribute('inert', '');
    navContent.style.display = '';
  }
}

Setup_Nav(media);

btnOpen.addEventListener('click', Open_Mobile_Menu);
btnClose.addEventListener('click', Close_Mobile_Menu);
media.addEventListener('change', function(e){
  Setup_Nav(e);
});

document.addEventListener('keyup', (e) => {
  if(e.key == 'Tab'){
    console.log(document.activeElement);
  }
});
