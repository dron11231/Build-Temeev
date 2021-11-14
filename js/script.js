let header = document.querySelector('header')
let popup = document.querySelector('.popup');
let body = document.querySelector('body');
let arrowRight = document.querySelector('.fa-arrow-alt-circle-right')
let photo = document.querySelector('.exx')

let popupVisible = function (){
    body.classList.add('no-scroll')
    popup.classList.remove('invisible');
    header.classList.add('blackout');    
}

let popupInvisible = function() {
    body.classList.remove('no-scroll')
    popup.classList.add('invisible');
    header.classList.remove('blackout');
}

let sliderHandler = function () {
    photo.classList.add('slide');
}