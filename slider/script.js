let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const btnNext = document.querySelector('.slider-next');
const btnPrev = document.querySelector('.slider-prev');


btnNext.addEventListener('click', () => {
  offset += 150;
  if (offset > 450) {
    offset = 0;
  };
  sliderLine.style.left = -offset + 'px';
});

btnPrev.addEventListener('click', () => {
  offset -= 150;
  if (offset < 0) {
    offset = 450;
  };
  sliderLine.style.left = -offset + 'px';
});