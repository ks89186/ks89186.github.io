let menu = document.querySelector('.burger');
let navigation = document.querySelector('.header__nav-items');
menu.addEventListener('click', function () {
  navigation.classList.toggle('header__nav-items--active');
  menu.classList.toggle('burger--active');
  document.body.classList.toggle('stop-scroll');
});

document.querySelectorAll('.header__nav-link').forEach(element => {
  element.addEventListener('click', function () {
    menu.classList.remove('burger--active');
    navigation.classList.remove('header__nav-items--active');
    document.body.classList.remove('stop-scroll');
  });
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  }
});

let btnTab = document.querySelectorAll('.our-work__item-link');
btnTab.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.our-work__item-link').forEach( tab => {
    tab.classList.remove('our-work__item-link--active');
    document.querySelectorAll('.our-work__article').forEach( el => {
    el.classList.remove('our-work__article--active');
    });
  });
    e.currentTarget.classList.add('our-work__item-link--active');
    document.querySelector(`[data-target = ${path}]`).classList.add('our-work__article--active');
  });

});

new Accordion('.faq__items', {
  elementClass: 'faq__item',
  triggerClass: 'faq__article-button',
  panelClass: 'faq__item-content',
  activeClass: 'faq__item--active'
});

document.querySelector('.header__search').addEventListener('click', function() {
  document.querySelector('.header__search-form').classList.add('header__search-form--active');
});

document.querySelector('.header__search-close').addEventListener('click', function() {
  document.querySelector('.header__search-form').classList.remove('header__search-form--active');
});
