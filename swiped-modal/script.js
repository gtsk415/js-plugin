const openBtn = document.querySelector('.open-btn');
const modal = document.querySelector('.modals');
const closeBtn = document.querySelector('.close-btn');
const mobileClose = document.querySelector('.mobile-close')

let disableScroll = () => {
  let pagePosition = window.scrollY;
  document.body.classList.add('disable-scroll');
  document.body.dataset.position= pagePosition;
  document.body.style.top = -pagePosition +'px';
}

let enableScroll = () => {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('disable-scroll');
  window.scroll({ top: pagePosition, left: 0 });
  document.body.removeAttribute('data-position');
}

userName.addEventListener('keydown', function(e) {
  if (/[^А-я]/.test(e.key)) {
    e.preventDefault();
  };
});

telephoneNumber.addEventListener('keydown', function(e) {
  if (/[^0-9+]/.test(e.key)) {
    e.preventDefault();
  };
});

openBtn.addEventListener('click', () => {
  openModalDesktop();
  openModalMobile();
});

modal.addEventListener('click', (e) => {
  if(e.target == modal) {
    closeModal();
  }
});

closeBtn.addEventListener('click', () => {
  closeModal();
});


const openModalDesktop = () => {
  modal.classList.add('is-open')
  enableScroll();
};

const closeModal = () => {
  modal.classList.remove('is-open')
  enableScroll();
};

const openModalMobile = () => {
  modal.classList.add('is-open');
  disableScroll();
  modal.querySelector('.modal').classList.add('visible');
};

const closeModalMobile = () => {
  modal.querySelector('.modal').classList.remove('visible');
  setTimeout(() => {
    modal.classList.remove('is-open');
    enableScroll();
  }, 400)
};


mobileClose.addEventListener('swiped-down', function(e) {
  closeModalMobile();
});

mobileClose.addEventListener('click', function(e) {
  closeModalMobile();
});

