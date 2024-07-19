
// TYPE TEXT
document.querySelector('.b-1').addEventListener('click', () => {
  let data = document.querySelector('.i-1').value;
  document.querySelector('.out-1').innerHTML = data;
  data = document.querySelector('.i-1').value = '';
});

document.querySelector('.i-1').addEventListener('input', () => {
  document.querySelector('.out-1').innerHTML = '';
});

// TYPE NUMBER

document.querySelector('.b-2').addEventListener('click', () => {
  let data = document.querySelector('.i-2').value;
  document.querySelector('.out-2').innerHTML = data;
  data = document.querySelector('.i-2').value = '';
});

document.querySelector('.i-2').addEventListener('input', () => {
  document.querySelector('.out-2').innerHTML = '';
});


// TYPE COLOR
document.querySelector('.b-3').addEventListener('click', () => {
  let data = document.querySelector('.i-3').value;
  document.querySelector('.color-title').style.color = data;
  
});

//  TYPE DATE
document.querySelector('.b-4').addEventListener('click', () => {
  let data = document.querySelector('.i-4').value;
  document.querySelector('.out-4').innerHTML = data;
  data = document.querySelector('.i-4').value = '';
});

//  TYPE RANGE
document.querySelector('.i-5').addEventListener('input', () => {
  let data = document.querySelector('.i-5').value;
  document.querySelector('.out-5').innerHTML = data;
});

//  TYPE CHECKBOX
document.querySelector('.b-6').addEventListener('click', () => {
  let data = document.querySelector('.i-6').value;
  if (document.querySelector('.i-6').checked) {
    document.querySelector('.out-6').innerHTML = data;
  } else {
    document.querySelector('.out-6').innerHTML = "";
  }
  
});

document.querySelector('.b-7').addEventListener('click', () => {
  let radio = document.querySelectorAll('.i-7');
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      data = radio[i].value;
      break;
    }
  }
  document.querySelector('.out-7').innerHTML = data;
});



