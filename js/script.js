let header = document.querySelector('header')
let popup = document.querySelector('.popup');
let body = document.querySelector('body');

let slides = document.querySelectorAll('.specification')
let slide = document.querySelector('.slide-1');
let slideTwo = document.querySelector('.slide-2');

let arrowLeft = document.querySelector('.fa-arrow-alt-circle-left')
let arrowRight = document.querySelector('.fa-arrow-alt-circle-right')

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





let timeOut = () => {
    setTimeout(sliderHandler, 200)
}

let sliderHandler = () => {
    if (getComputedStyle(slide).display == 'block') {
        slide.classList.remove('slide-out-left')
        slide.classList.add('slide-to-right')
        setTimeout("slide.style.display = 'none'" , 800);
    }

    if (getComputedStyle(slideTwo).display == 'block') {
        slideTwo.classList.remove('slide-out-left')
        slideTwo.classList.add('slide-to-right')
        setTimeout("slideTwo.style.display = 'none'" , 800);
    }

    if (getComputedStyle(slide).display == 'none') {
        slide.classList.remove('slide-to-right');
        slide.style.display = 'block';
        slide.classList.add('slide-out-left')
    }

    if (getComputedStyle(slideTwo).display == 'none'){
        slideTwo.classList.remove('slide-to-right');
        slideTwo.style.display = 'block';
        slideTwo.classList.add('slide-out-left')
    }
    
}