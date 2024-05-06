const btnOff = document.querySelector('.scroll-off');
const btnOn = document.querySelector('.scroll-on');
const body = document.body;

const disableScroll = () => {
  let pagePosition = window.scrollY;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px'; 
};

const enableScroll = () => {
  let pagePosition = parseInt(body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  window.scroll({top: pagePosition, left: 0});
  body.removeAttribute('data-position');
};

btnOff.addEventListener('click', (e) => {
	disableScroll();
	e.currentTarget.style.pointerEvents = 'none';
  btnOn.style.cursor = 'pointer';
	btnOn.style.pointerEvents = 'auto';
});

btnOn.addEventListener('click', (e) => {
	enableScroll();
	e.currentTarget.style.pointerEvents = 'none';
  btnOff.style.pointerEvents = 'auto';
});