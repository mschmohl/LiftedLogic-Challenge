let slidePosition = 0;
const slides = document.getElementsByClassName('slider__card');
const totalSlides = slides.length;


document.
  getElementById('slider__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('slider__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('slider__card--visible');
    slide.classList.add('slider__card--hidden');
  }

  slides[slidePosition].classList.add('slider__card--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}