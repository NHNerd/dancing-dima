import { progressBar, win, count, clickCounter } from './progressBar.js';
import { phrasesRandomHandler, phrasesWinHanler } from './speech.js';
import { moneyHandler } from './money.js';
import { gameStarted, shakeWrapOnDOM } from './start.js';
import { smashMusic, hoverMusic } from './sound.js';
import { swipePC, swipeMobile, swipe } from './swipe.js';

const userDialogDOM = document.getElementById('user-dialog');
const userAnswer1DOM = document.querySelector('.user-answer1');
const userAnswer2DOM = document.querySelector('.user-answer2');
const userAnswer3DOM = document.querySelector('.user-answer3');
const danilaDOM = document.getElementById('danila');

danilaDOM.style.backgroundImage = "url('./public/img/start.gif')";

danilaDOM.addEventListener('mousedown', (e) => {
  if (e.type === 'mousedown') {
    clickOnDanilaHandler(e);
  }
});

danilaDOM.addEventListener('touchstart', (e) => {
  e.preventDefault();
  for (let i = 0; i < e.touches.length; i++) {
    clickOnDanilaHandler(e.touches[i]);

    // css Active for mobile
    if (gameStarted) {
      shakeWrapOnDOM.style.animation = 'shakeDanila 0.3s ease';
    }
  }
});

danilaDOM.addEventListener('touchend', (e) => {
  e.preventDefault();
  // css Active for mobile
  if (gameStarted) {
    shakeWrapOnDOM.style.animation = '';
  }
});

function clickOnDanilaHandler(e) {
  if (!win && gameStarted && !swipe) {
    smashMusic();
    progressBar(danilaDOM);

    if (count <= clickCounter) {
      phrasesWinHanler();
    } else {
      phrasesRandomHandler();
    }
  }
}

moneyHandler();
swipePC();
swipeMobile();

// Hover sound
const userAnswersDOM = [userAnswer1DOM, userAnswer2DOM, userAnswer3DOM];
userAnswersDOM.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    if (getComputedStyle(userDialogDOM).opacity >= 0.8) {
      hoverMusic();
    }
  });
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
