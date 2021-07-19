const slides = document.querySelectorAll('.carousel__content');
const dots = document.querySelectorAll('.dots__item');
let index = 0;

const activeSlide = n => {
for(slide of slides) {
        slide.classList.remove('actives');
    }
    slides[n].classList.add('actives');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length -1) {
        index = 0;
        prepareCurrerntSlides(index);
    } else {
        index++;
        prepareCurrerntSlides(index);
    }
}

const prepareCurrerntSlides = ind => {
    activeSlide(ind);
    activeDot(ind);
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrerntSlides(index);
    })
})

setInterval(nextSlide, 2500);

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const sliderLine = document.querySelector('.following__instagram--container');
let offset = 0;

btnNext.addEventListener('click', () => {
    offset = offset + 320;
    if(offset > 1600) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

btnPrev.addEventListener('click', () => {
    offset = offset - 320;
    if(offset < 0) {
        offset = 1600;
    }
    sliderLine.style.left = -offset + 'px';
})