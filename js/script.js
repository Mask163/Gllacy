var modalFeedback = document.querySelector('.modal-feedback');
var btnFeedback = document.querySelector('.btn-contacts');
var overlay = document.querySelector('.overlay');

btnFeedback.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalFeedback.classList.add('modal-show');
    overlay.classList.add('modal-show');
});

var closeModalFeedback = modalFeedback.querySelector('.modal-close');

closeModalFeedback.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-show');
    overlay.classList.remove('modal-show');
});

document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        modalFeedback.classList.remove('modal-show');
        overlay.classList.remove('modal-show');
    }
});

var modalMap = document.querySelector('.modal-map');
var btnInteractiveMap = document.querySelector('.interactive-map');

btnInteractiveMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalMap.classList.add('modal-show');
});

var closeModalMap = modalMap.querySelector('.modal-close');

closeModalMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalMap.classList.remove('modal-show');
});

document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        modalMap.classList.remove('modal-show');
    }
});
