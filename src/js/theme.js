import getRefs from './gerRefs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = getRefs();

refs.theme.addEventListener('change', e => {
  e.preventDefault();

  if (!e.target.checked) return lightTheme();

  darkTheme();
});

function darkTheme() {
  document.body.classList.remove(Theme.LIGHT);
  document.body.classList.add(Theme.DARK);
  setThemeOnLocalStorage(Theme.DARK);
}

function lightTheme() {
  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);
  setThemeOnLocalStorage(Theme.LIGHT);
}

function setThemeOnLocalStorage(chooseTheme) {
  localStorage.theme = chooseTheme;
}
