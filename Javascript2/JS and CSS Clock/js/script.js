// Name: Gianni
// Date: April 5, 2025
// Description: JS Clock with working hands and number markers

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const clockFace = document.querySelector('.clock-face');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function addNumbersToClock() {
  for (let i = 1; i <= 12; i++) {
    const numberEl = document.createElement('div');
    numberEl.classList.add('clock-number');
    numberEl.innerText = i;
    
    const angle = (i * 30) - 90; // 360 / 12 = 30 degrees per number
    const radius = 13; // distance from center (in rem)
    
    const x = radius * Math.cos(angle * (Math.PI / 180));
    const y = radius * Math.sin(angle * (Math.PI / 180));

    numberEl.style.left = `calc(50% + ${x}rem)`;
    numberEl.style.top = `calc(50% + ${y}rem)`;

    clockFace.appendChild(numberEl);
  }
}

setInterval(setDate, 1000);
setDate();
addNumbersToClock();