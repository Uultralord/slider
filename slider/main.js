const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;
/* функция удаления и добавления активного класса в зависимости от слайда*/ 
const activeSlide = n =>{
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
/* функция удаления и добавления активного класса в зависимости от кнопки*/ 
const activeDots = n =>{
    for (dot of dots) {
       dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
// объединение двух функций
const prepareCurrentSlides =ind=>{
    activeDots(index);
    activeSlide(index);
}
// переключение слайда вперед
const nextSlide = () =>{
    if (index == slides.length - 1){
        index = 0;
        prepareCurrentSlides();
    } else {
        index++;
        prepareCurrentSlides();
    }
}
// переключение слайда назад
const prevSlide = () =>{
    if (index == 0){
        index = slides.length - 1;
        prepareCurrentSlides();
    } else {
        index--;
        prepareCurrentSlides();
    }
}
// переключение точек вместе с картинкой
dots.forEach((item, indexDot)=>{
    item.addEventListener('click',()=>{
        index = indexDot;
        prepareCurrentSlides(index);
    })
})
// автоматическое переключение через 2 сек вперед
setInterval(()=>nextSlide(index),2000); 

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);