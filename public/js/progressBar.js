import { discoBall } from './diskoBall.js';
import { winMusic } from './sound.js';

const progressBarDOM = document.querySelector('.inner');
const numDOM = document.querySelector('.num');
const shakeWrapDOM = document.querySelector('.shake-wrap');

let clickCounter = 0;
let win = false;
let bratheToDance = false;
const count = 100;

export function progressBar(danilaDOM) {
  clickCounter = Math.min(count, clickCounter + 1);
  if (clickCounter === count && !bratheToDance) {
    winMusic();
    win = true;
    shakeWrapDOM.classList.remove('shake-wrap-on');
    discoBall();
    danilaDOM.style.backgroundImage = "url('./public/img/bratheToDance.gif')";
    setTimeout(function () {
      danilaDOM.style.backgroundImage = "url('./public/img/dance1.gif')";
    }, 6200);
    bratheToDance = true;
  }
  progressBarDOM.style.width = `${clickCounter}%`;
  numDOM.textContent = `${clickCounter}/${count}`;
  return win;
}

export { win, count, clickCounter };
