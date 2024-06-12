const header = document.querySelector('.header');
const first = document.querySelector('.first');
const headerHeight = header.offsetHeight;
const firstHeight = first.offsetHeight;
let lastScrollTop = 0;


window.addEventListener('scroll', () =>{
  let scrollDistance = window.scrollY;

  //SCROLL DOWN

  // if(scrollDistance >= firstHeight) {
  //   header.classList.add('header--fixed');
  //   first.style.marginTop = `${headerHeight}px`;
  // } else {
  //   header.classList.remove('header--fixed');
  //   first.style.marginTop = null;
  // }
  
  //SCROLL UP

  if(scrollDistance > lastScrollTop) {
    header.classList.remove('header--fixed');
    first.style.marginTop = null;
  } else {
    header.classList.add('header--fixed');
    first.style.marginTop = `${headerHeight}px`;
  }

  if (scrollDistance === 0) {
    header.classList.remove('header--fixed');
    first.style.marginTop = null;
  }
  lastScrollTop = scrollDistance;
});

