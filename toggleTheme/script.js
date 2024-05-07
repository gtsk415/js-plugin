// добавить классы для html (light/dark)
// создать переменные для main color


// функция для вызова актуальной темы сайта 
const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// функция для проверки актуальной темы и замены на протипоположную 
const toggleTheme = () => {
  if (localStorage.getItem('theme') === 'dark-theme') {
    setTheme('light-theme');
  } else {
    setTheme('dark-theme');
  }
}

setTheme('light-theme');

// навешивается обработик событий по клику на выбранный элемент
document.querySelector('').addEventListener('click', (e) => {
  toggleTheme();
})