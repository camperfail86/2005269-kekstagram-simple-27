import './download.js';

// Код для следующего дз
const uploadFile = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = uploadFile.querySelector('#upload-cancel');

// Нужно сделать при загрузке файла этот пункт
document.addEventListener('keydown', () => {
  uploadFile.classList.remove('hidden');
  body.classList.add('modal-open');
});

closeButton.addEventListener('click', () => {
  uploadFile.classList.add('hidden');
  body.classList.remove('modal-open');
});


