const filter = new PageFilter('#search', {
  onInput: (input) => {}
});

document.querySelector('.btn').addEventListener('click' , () => {
  filter.clear();
});