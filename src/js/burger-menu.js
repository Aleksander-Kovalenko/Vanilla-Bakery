// const burgerRefs = document.querySelector('.btn__burger');
// const menuRefs = document.querySelector('.navigation__menu');

// burgerRefs.addEventListener('click', onClickBtn);

// function onClickBtn(e) {
//   e.preventDefault();

//   burgerRefs.classList.toggle('is-open');
//   menuRefs.classList.toggle('is-open');
// }


import getRefs from './gerRefs'

const refs = getRefs()

refs.burgerBtn.addEventListener('click', e=>{
  e.preventDefault()

  refs.burgerBtn.classList.toggle('is-open');
refs.mobileMenu.classList.toggle('is-open');
})