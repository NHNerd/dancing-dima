import { clickMusic } from './sound.js';

const startbButtonDOM = document.getElementById('start-button');
const startDOM = document.getElementById('start');
const headerDOM = document.getElementById('header');
const mainDOM = document.getElementById('main');
const footerDOM = document.getElementById('footer');
const danilaDOM = document.getElementById('danila');
const gameNameDOM = document.getElementById('game-name');
const dialogWindowDOM = document.querySelector('.dialog-window');
const userAnswer2DOM = document.querySelector('.user-answer2');
const userDialogDOM = document.getElementById('user-dialog');
const shakeWrapDOM = document.querySelector('.shake-wrap');

let gameStarted = false;

export function start() {
  containerDiscoDOM.style.translate = '0 0';
  lightDOM.classList.add('light-opacity');
}

startbButtonDOM.addEventListener('mousedown', (e) => {
  clickMusic();
  startDOM.style.filter = 'blur(120px)';
  startDOM.style.opacity = 0;
  danilaDOM.style.backgroundImage = "url('./public/img/start.gif')";

  // opening game
  setInterval(() => {
    mainDOM.style.opacity = 1;
    mainDOM.style.pointerEvents = 'auto';
    danilaDOM.style.opacity = 1;

    setInterval(() => {
      gameNameDOM.style.animation = 'nameGame 3.5s ease';
    }, 8500);
  }, 1000);
});

gameNameDOM.addEventListener('animationend', function () {
  danilaDOM.style.backgroundImage = "url('./public/img/idel-breath.gif')";
  footerDOM.style.opacity = 1;
  footerDOM.style.pointerEvents = 'auto';
  footerDOM.style.animation = 'footerOpening 1.5s ease-in';
  dialogWindowDOM.textContent = 'Йо';
});

userAnswer2DOM.addEventListener('mousedown', (e) => {
  clickMusic();
  dialogWindowDOM.textContent = 'А ты попробуй меня заставь!';

  danilaDOM.style.cursor = 'pointer';
  headerDOM.style.opacity = 1;
  gameStarted = true;

  userDialogDOM.style.display = 'none';
  shakeWrapDOM.classList.add('shake-wrap-on');
});

export { gameStarted };
