const btns = document.querySelectorAll('.btn');
const modalsOverlay = document.querySelector('.modals-overlay');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visiable');
    });


    document.querySelector(`[data-target='${path}']`).classList.add('modal--visiable');
    modalsOverlay.classList.add('modals-overlay--visiable');
  });
});

modalsOverlay.addEventListener('click', (e) => {
  
  if (e.target === modalsOverlay) {
    
    modalsOverlay.classList.remove('modals-overlay--visiable');
    modals.forEach((el) => {
        el.classList.remove('modals--visiable');
    });
  
  };

  
});
