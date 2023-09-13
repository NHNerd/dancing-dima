import { gameStarted } from './start.js';
import { win } from './progressBar.js';

const danilaDOM = document.getElementById('danila');

let cursorPosDown = 0;
let cursorPosUp = 0;
let swipe = false;

export function swipePC() {
  document.addEventListener('mousedown', (e) => {
    cursorPosDown = e.clientX;
  });

  document.addEventListener('mouseup', (e) => {
    cursorPosUp = e.clientX;

    if (cursorPosUp > cursorPosDown + 160 && !swipe && gameStarted) {
      swipe = true;
      danilaDOM.style.backgroundImage = "url('./public/img/swipeR.gif')";

      danilaDOM.style.animation = 'swipeR 0.5s ease-out';
      danilaDOM.style.animationFillMode = 'forwards';

      setTimeout(() => {
        //? Add random url for gif cash
        danilaDOM.style.backgroundImage = `url('./public/img/swipeReturnR.gif?${Math.random()}')`;
        danilaDOM.style.animationFillMode = 'none';
        danilaDOM.style.animation = 'swipeRReturn 2s ease-out';
      }, 1600);
      return;
    }

    if (cursorPosUp < cursorPosDown - 160 && !swipe && gameStarted) {
      swipe = true;
      danilaDOM.style.backgroundImage = "url('./public/img/swipeL.gif')";
      danilaDOM.style.animation = 'swipeL 0.5s ease-out';
      danilaDOM.style.animationFillMode = 'forwards';

      setTimeout(() => {
        //? Add random url for gif cash
        danilaDOM.style.backgroundImage = `url('./public/img/swipeReturnL.gif?${Math.random()}')`;
        danilaDOM.style.animationFillMode = 'none';
        danilaDOM.style.animation = 'swipeLReturn 2s ease-out';
      }, 1600);
    }
  });

  // return Breath loop
  danilaDOM.addEventListener('animationend', function (event) {
    if (event.animationName === 'swipeLReturn' || event.animationName === 'swipeRReturn') {
      swipe = false;
      if (!win) {
        danilaDOM.style.backgroundImage = "url('./public/img/idel-breath.gif')";
        return;
      }
      danilaDOM.style.backgroundImage = "url('./public/img/dance1.gif')";
    }
  });
}

//Mobile
export function swipeMobile() {
  let touchStartX = 0;
  let touchEndX = 0;

  danilaDOM.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  danilaDOM.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;

    if (touchEndX > touchStartX + 160 && !swipe && gameStarted) {
      // Обработка свайпа вправо
      swipe = true;
      danilaDOM.style.backgroundImage = "url('./public/img/swipeR.gif')";
      danilaDOM.style.animation = 'swipeR 0.5s ease-out';
      danilaDOM.style.animationFillMode = 'forwards';

      setTimeout(() => {
        // Добавьте случайный параметр для избежания кэширования GIF
        danilaDOM.style.backgroundImage = `url('./public/img/swipeReturnR.gif?${Math.random()}')`;
        danilaDOM.style.animationFillMode = 'none';
        danilaDOM.style.animation = 'swipeRReturn 2s ease-out';
      }, 1600);
    } else if (touchEndX < touchStartX - 160 && !swipe && gameStarted) {
      // Обработка свайпа влево
      swipe = true;
      danilaDOM.style.backgroundImage = "url('./public/img/swipeL.gif')";
      danilaDOM.style.animation = 'swipeL 0.5s ease-out';
      danilaDOM.style.animationFillMode = 'forwards';

      setTimeout(() => {
        // Добавьте случайный параметр для избежания кэширования GIF
        danilaDOM.style.backgroundImage = `url('./public/img/swipeReturnL.gif?${Math.random()}')`;
        danilaDOM.style.animationFillMode = 'none';
        danilaDOM.style.animation = 'swipeLReturn 2s ease-out';
      }, 1600);
    }
  });

  // return Breath loop
  danilaDOM.addEventListener('animationend', function (event) {
    if (event.animationName === 'swipeLReturn' || event.animationName === 'swipeRReturn') {
      if (!win) {
        danilaDOM.style.backgroundImage = "url('./public/img/idel-breath.gif')";
        return;
      }
      danilaDOM.style.backgroundImage = "url('./public/img/dance1.gif')";
      swipe = false;
    }
  });
}

export { swipe };
