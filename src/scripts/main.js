'use strict';

const ul = document.querySelector('.gallery__list');
const div = document.querySelector('.gallery__large-img ');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  div.src = link.href;
});
