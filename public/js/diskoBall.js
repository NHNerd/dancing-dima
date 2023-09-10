const containerDiscoDOM = document.getElementById('container-disco');
const lightDOM = document.querySelector('.light');

export function discoBall() {
  containerDiscoDOM.style.translate = '0 0';
  lightDOM.classList.add('light-opacity');
}
