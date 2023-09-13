//* Need full path
const soundsWin = [
  './public/sound/beautiful-girl-129417.mp3',
  './public/sound/clanabogan-beast-phonk-148615.mp3',
  './public/sound/drift-rush-house-phonk-164907.mp3',
  './public/sound/rocket-phonk-music-141359.mp3',
  './public/sound/shade-drift-phonk-style-music-150200.mp3',
];

const soundsSmash = [
  './public/sound/smash/0adca76975d91f0.mp3',
  './public/sound/smash/690f786f1836b07.mp3',
  './public/sound/smash/91609fcd5570daf.mp3',
  './public/sound/smash/91f43de39d74812.mp3',
  './public/sound/smash/9663562e1ffbd9d.mp3',
  './public/sound/smash/b23b5f42f6c1bed.mp3',
  './public/sound/smash/c5e6c16450772dc.mp3',
  './public/sound/smash/d4ff14f1537871f.mp3',
  './public/sound/smash/e51430c0bb3a1ae.mp3',
];

const randomSoundWin = Math.floor(Math.random(2) * soundsWin.length);

const phonk = new Audio(soundsWin[randomSoundWin]);
const click = new Audio('./public/sound/menu/click.mp3');
const hover = new Audio('./public/sound/menu/najatie-na-kompyuternuyu-knopku1.mp3');
const opening = new Audio('./public/sound/opening.mp3');

export function winMusic() {
  phonk.play();
}

export function openingMusic() {
  opening.play();
}

export function smashMusic() {
  let randomSoundSmash = Math.floor(Math.random(2) * soundsSmash.length);
  let smash = new Audio(soundsSmash[randomSoundSmash]);
  smash.play();
}

export function clickMusic() {
  if (!click.paused) {
    click.pause();
    click.currentTime = 0; // Cansel music time
  }
  click.play();
}

export function hoverMusic() {
  if (!click.paused) {
    click.pause();
    click.currentTime = 0; // Cansel music time
  }
  hover.play();
}
