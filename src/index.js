import menuTemplate from './menuItems.hbs';
import menuItems from './menu.json';
import './styles.css';

const markup = menuTemplate(menuItems);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const setInitialTheme = () => {
  if (localStorage.getItem('theme') === Theme.DARK) {
    themeSwitcher.checked = true;
    body.classList.add('dark-theme');
  }
};

function handleThemeSwitcher() {
  if (themeSwitcher.checked === true) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
setInitialTheme();

themeSwitcher.addEventListener('change', handleThemeSwitcher);
