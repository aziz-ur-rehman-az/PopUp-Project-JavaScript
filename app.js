'use strict';

const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-popup');
const btnsShowModal = document.querySelectorAll('.show-popup');

const openModal = function () {
  popup.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  popup.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
    closeModal();
  }
});
