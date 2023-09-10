const dialogWindowDOM = document.querySelector('.dialog-window');

const phrases = [
  'Я скзал! Я не буду это делать.',
  'Нет',
  'Это не смешно...',
  'Убери руки!!!',
  'Это тупо...',
  'Не трогай меня!',
  'Omae Wa Mou Shindeiru.',
  'Все чувак',
  'Это все полный отстой.',
  'Supreme',
  'Ты мне очки сломал!',
  'Хватит.',
  'Aй!',
  'Я Шон Пабло!',
  'Надоело',
  'Я сейчас домой пойду.',
];

export function phrasesRandomHandler() {
  const randomListNum = Math.floor(Math.random(1) * phrases.length);
  const phrasesRandom = phrases[randomListNum];

  dialogWindowDOM.textContent = phrasesRandom;
}
export function phrasesWinHanler() {
  dialogWindowDOM.textContent = 'Ладно!';
}

export const phrasesMonyNot = [
  'Чувак, нет.',
  'Верни долг сначала',
  'У меня нет денег.',
  'Я тебе вчера давал!',
  'Че?',
  'Иди на работу!',
  'Я подумаю...',
  'Может ты мне дашь денег?',
  'Я все потратил на supreme, извини.',
  'Откуда я их возьму?',
];
