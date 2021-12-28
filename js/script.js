let header = document.querySelector('header')
let popup = document.querySelector('.popup');
let body = document.querySelector('body');

let slides = document.querySelectorAll('.specification')

let slide = document.querySelector('.slide-1');
let slideTwo = document.querySelector('.slide-2');
let slideThree = document.querySelector('.slide-3')

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


let sliderHandler = () => {
    if (slideThree.classList.contains('slide-out-left')) {
        slide.style.display = 'block';
        setTimeout("slideThree.style.display = 'none'", 1000)
        slideThree.classList.remove('slide-out-left')
        slideThree.classList.add('slide-to-right');
        slideTwo.classList.remove('slide-to-right')
        slide.classList.add('slide-out-left');
        return;
    }

    if (!slide.classList.contains('slide-to-right')){
        slideTwo.style.display = 'block';
        setTimeout("slide.style.display = 'none'", 1000)
        slide.classList.remove('slide-out-left');
        slide.classList.add('slide-to-right');
        slideTwo.classList.add('slide-out-left');
        slideThree.classList.remove('slide-to-right')
        return;
    }
    if (slide.classList.contains('slide-to-right') && slideTwo.classList.contains('slide-out-left')){
        slideThree.style.display = 'block';
        setTimeout("slideTwo.style.display = 'none'", 1000)
        slide.classList.remove('slide-to-right');
        slideTwo.classList.remove('slide-out-left');
        slideTwo.classList.add('slide-to-right');
        slideThree.classList.add('slide-out-left');
        return;
    }
}








/* let sliderHandler = () => {
    if (getComputedStyle(slide).display == 'block') {
        slide.classList.remove('slide-out-left')
        slide.classList.add('slide-to-right')
        setTimeout("slide.style.display = 'none'" , 800);
    }

    if (getComputedStyle(slide).display == 'none') {
        slide.classList.remove('slide-to-right');
        slide.style.display = 'block';
        slide.classList.add('slide-out-left')
    }

    if (getComputedStyle(slideTwo).display == 'block') {
        slideTwo.classList.remove('slide-out-left')
        slideTwo.classList.add('slide-to-right')
        setTimeout("slideTwo.style.display = 'none'" , 800);
    }


    if (getComputedStyle(slideTwo).display == 'none'){
        slideTwo.classList.remove('slide-to-right');
        slideTwo.style.display = 'block';
        slideTwo.classList.add('slide-out-left')
    }
     
}  */




/* for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('slide-to-right')){
            invisIndex ++;
            console.log(invisIndex);
            console.log(slides[i])
        } */