import { progressBar, win, count, clickCounter } from './progressBar.js';
import { phrasesRandomHandler, phrasesWinHanler } from './speech.js';
import { moneyHandler } from './money.js';
import { gameStarted } from './start.js';
import { smashMusic, hoverMusic } from './sound.js';

const userAnswer1DOM = document.querySelector('.user-answer1');
const userAnswer2DOM = document.querySelector('.user-answer2');
const userAnswer3DOM = document.querySelector('.user-answer3');
const danilaDOM = document.getElementById('danila');
const startbButtonDOM = document.getElementById('start-button');

danilaDOM.style.backgroundImage = "url('./public/img/start.gif')";

danilaDOM.addEventListener('mousedown', (e) => {
  if (!win && gameStarted) {
    smashMusic();
    progressBar(danilaDOM);
    if (count - 1 <= clickCounter) {
      phrasesWinHanler();
    } else {
      phrasesRandomHandler();
    }
  }
});

moneyHandler();

startbButtonDOM.addEventListener('mouseenter', (e) => {
  hoverMusic();
});

userAnswer1DOM.addEventListener('mouseenter', (e) => {
  hoverMusic();
});

userAnswer2DOM.addEventListener('mouseenter', (e) => {
  hoverMusic();
});

userAnswer3DOM.addEventListener('mouseenter', (e) => {
  hoverMusic();
});
