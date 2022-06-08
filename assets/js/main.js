onload = () => {

  const load = document.getElementById('load')

  setTimeout(() => {

      load.style.display = 'none'

  }, 2500)

}

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {

  navMenu.classList.add('show-menu');

});

navClose.addEventListener('click', () => {

  navMenu.classList.remove('show-menu');

});

const navLink = document.querySelectorAll('.nav__link');

const hideMenu = () => {

  navMenu.classList.remove('show-menu');

};

navLink.forEach(link => link.addEventListener('click', hideMenu));

const scrollHeader = () => {

  const header = document.getElementById('header');

  if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

};
window.addEventListener('scroll', scrollHeader);

let mixerProduct = mixitup('.products__content', {
  selectors: {
    target: '.products__card'
  },
  animation: {
    duration: 300
  }
});
mixerProduct.filter('.delicacies');


const categoryProduct = document.querySelectorAll('.products__item');
function activeProduct() {

  categoryProduct.forEach(category => category.classList.remove('active-product'))
  this.classList.add('active-product');

};
categoryProduct.forEach(category => category.addEventListener('click', activeProduct))


const section = document.querySelectorAll('section[id]');
function activeSectionMenu() {

  const scrollY = window.pageYOffset

  section.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }

  })
}
window.addEventListener('scroll', activeSectionMenu)


function scrollUp() {

  const scrollUp = document.getElementById('scroll-up')

  if (this.scrollY >= 350) scrollUp.classList.add('show-scrollup'); else scrollUp.classList.remove('show-scrollup');

};
window.addEventListener('scroll', scrollUp)
