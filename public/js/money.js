import { phrasesMonyNot } from './speech.js';
import { clickMusic } from './sound.js';
const moneyDOM = document.getElementById('money');
const userDialogDOM = document.getElementById('user-dialog');
const userAnswer1DOM = document.querySelector('.user-answer1');
const dialogWindowDOM = document.querySelector('.dialog-window');

export function moneyHandler() {
  userAnswer1DOM.addEventListener('mousedown', xxx);
}

function xxx() {
  //TODO fix sound when mony raining
  clickMusic();
  if (Math.random(3) > 0.9) {
    moneyDOM.style.backgroundImage = "url('./public/img/raining-money-money.gif')";
    moneyDOM.style.opacity = 1;
    userDialogDOM.style.opacity = 0;
    userDialogDOM.style.cursor = 'none';

    dialogWindowDOM.textContent = 'Ладно';
    userAnswer1DOM.removeEventListener('mousedown', xxx);

    setTimeout(() => {
      moneyDOM.style.opacity = 0;
      setTimeout(() => {
        userDialogDOM.style.opacity = 1;
        userDialogDOM.style.cursor = 'auto';
      }, 1000);

      userAnswer1DOM.addEventListener('mousedown', xxx);
    }, 5000);
  } else {
    const numberMoneyNot = Math.floor(Math.random(3) * phrasesMonyNot.length);
    dialogWindowDOM.textContent = phrasesMonyNot[numberMoneyNot];
  }
}
