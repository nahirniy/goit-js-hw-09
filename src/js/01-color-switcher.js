const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function setColor() {
  startBtn.setAttribute('disabled', 'true');

  const colorInterval = setInterval(() => {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  stopBtn.addEventListener('click', () => {
    clearInterval(colorInterval);
    startBtn.removeAttribute('disabled');
  });
}

startBtn.addEventListener('click', setColor);
