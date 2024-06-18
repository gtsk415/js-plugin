const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};

const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
};

const block = document.querySelector('.block');
const btn = document.querySelector('.btn');

let flag = false;

btn.addEventListener('click', (e) => {
  if (!flag) {
    fadeIn(block, 1000, 'flex');
    flag = true;
  } else {
    fadeOut(block, 1000);
    flag = false;
  }
});