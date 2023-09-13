import { discoBall } from './diskoBall.js';
import { winMusic } from './sound.js';

const progressBarDOM = document.querySelector('.inner');
const numDOM = document.querySelector('.num');
const shakeWrapDOM = document.querySelector('.shake-wrap');
const equalizerDOM = document.getElementById('equalizer');

let clickCounter = 0;
let win = false;
let bratheToDance = false;
const count = 100;

export function progressBar(danilaDOM) {
  clickCounter = Math.min(count, clickCounter + 100);
  if (clickCounter === count && !bratheToDance) {
    winMusic();
    win = true;
    numDOM.style.animation = 'musicFlex 0.55s infinite';
    shakeWrapDOM.classList.remove('shake-wrap-on');
    danilaDOM.style.cursor = 'none';
    discoBall();
    danilaDOM.style.backgroundImage = "url('./public/img/bratheToDance.gif')";

    equalizerDOM.style.animation = 'openEqualizer 4s ease';
    equalizerDOM.style.animationFillMode = 'forwards';

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
