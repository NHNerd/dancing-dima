import { progressBar, win, count, clickCounter } from './progressBar.js';
import { phrasesRandomHandler, phrasesWinHanler } from './speech.js';
import { moneyHandler } from './money.js';
import { gameStarted } from './start.js';
import { smashMusic, hoverMusic } from './sound.js';
import { swipePC, swipeMobile, swipe } from './swipe.js';

const userAnswer1DOM = document.querySelector('.user-answer1');
const userAnswer2DOM = document.querySelector('.user-answer2');
const userAnswer3DOM = document.querySelector('.user-answer3');
const danilaDOM = document.getElementById('danila');

danilaDOM.style.backgroundImage = "url('./public/img/start.gif')";

danilaDOM.addEventListener('mousedown', (e) => {
  if (!win && gameStarted && !swipe) {
    swipe = true;
    smashMusic();
    progressBar(danilaDOM);
    if (count - 1 <= clickCounter) {
      phrasesWinHanler();
    } else {
      phrasesRandomHandler();
    }
  }
});

//TODO нерабоатет active-CSS на сенсорное касание
danilaDOM.addEventListener('touchstart', (e) => {
  e.preventDefault();

  if (!win && gameStarted && !swipe) {
    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i];

      smashMusic();
      progressBar(danilaDOM);
      if (count - 1 <= clickCounter) {
        phrasesWinHanler();
      } else {
        phrasesRandomHandler();
      }
    }
  }
});

moneyHandler();
swipePC();
swipeMobile();

userAnswer1DOM.addEventListener('mouseenter', (e) => {
  hoverMusic();
});

userAnswer2DOM.addEventListener('mouseenter', (e) => {
  hoverMusic();
});

userAnswer3DOM.addEventListener('mouseenter', (e) => {
  hoverMusic();
});

// Setup dinamic screen size into CSS
let screenSize = { x: window.innerWidth, y: window.innerHeight };

document.documentElement.style.setProperty('--screen-width', `${screenSize.x}px`);
document.documentElement.style.setProperty('--screen-height', `${screenSize.y}px`);

window.addEventListener('resize', () => {
  screenSize = { x: window.innerWidth, y: window.innerHeight };
  document.documentElement.style.setProperty('--screen-width', `${screenSize.x}px`);
  document.documentElement.style.setProperty('--screen-height', `${screenSize.y}px`);
});
