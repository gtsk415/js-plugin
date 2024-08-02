const imageOut = document.querySelector('.image-out');
const textContent = document.querySelector('.text-content');

for (key in images) {
  let img = document.createElement('img');
  img.setAttribute('data-key', key);
  img.classList.add('out-pic');
  img.src = 'img/' + key + '.svg';
  imageOut.append(img);
}

function showInfo (e) {
  const key = e.target.dataset['key'];
  if (key === undefined) {
    return true;
  } else {
    textContent.innerHTML = `<h3 class="content-title">${images[key]["name"]}</h3><p class= "text">${images[key]["type"]}</p>`

    e.target.style.cssText = 'stroke-width: 1;stroke: #123456;'
  }
};

imageOut.addEventListener('click', showInfo);

