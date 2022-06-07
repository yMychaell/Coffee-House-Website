const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {

  navMenu.classList.add('show-menu');

})

navClose.addEventListener('click', () => {

  navMenu.classList.remove('show-menu');

})

const navLink = document.querySelectorAll('.nav__link');

const hideMenu = () => {

  navMenu.classList.remove('show-menu');

}

navLink.forEach(link => link.addEventListener('click', hideMenu))

const scrollHeader = () => {

  const header = document.getElementById('header')

  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader);
