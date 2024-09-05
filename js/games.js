/* GAMES */
var slides = document.querySelector('.slides');
var slide = document.querySelectorAll('.games-inner')
var currentIdx = 1;
var slideCount = slide.length;
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');
var slideWidth = 500;

slides.style.width = slideWidth * slideCount + 'px';

function moveSlide(num) {
  slides.style.transform = 'translateX(' + (-slideWidth * num) + 'px)';
  currentIdx = num;
};

moveSlide(currentIdx); // 처음에 3번째 이미지로 이동

nextBtn.addEventListener('click', function() {
  if(currentIdx < slideCount - 1) {
    moveSlide(currentIdx + 1); 
  } else {
    moveSlide(0); 
  }
});

prevBtn.addEventListener('click', function() {
  if(currentIdx > 0) {
    moveSlide(currentIdx - 1); 
  } else {
    moveSlide(slideCount - 1); 
  }
});