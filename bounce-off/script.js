const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const body = document.body;
const fixBlocks = document.querySelectorAll('.fix-block');

 const disableScroll = () => {
  // scroll bar width
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  
  let pagePosition = window.scrollY;

  fixBlocks.forEach((el) => {
    el.computedStyleMap.paddingRight = paddingOffset;
  });

  body.style.paddingRight = paddingOffset;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
}

const enableScroll = () => {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');

  fixBlocks.forEach((el) => {
    el.computedStyleMap.paddingRight = '0px';
  });

  body.style.paddingRight = '0px';
  window.scroll({ top: pagePosition, left: 0});
  body.removeAttribute('data-position');
}

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    disableScroll();

    modals.forEach((el) => {
      el.classList.remove('modal-visiable');
    });

    document.querySelector(`[data-target='${path}']`).classList.add('modal-visiable');
    modalOverlay.classList.add('modal-overlay--visiable');
  });
});

modalOverlay.addEventListener('click', (e) => {
  enableScroll();

  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visiable');
    modals.forEach((el) => {
      el.classList.remove('modal-visiable')
    });
  }
});