const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const totalSeconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds, 0);

let secondsLeft = totalSeconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

const result = `${hours} hours, ${mins} minutes, ${secondsLeft} seconds`;
console.log(result);

// Show the result on the page
const display = document.getElementById('display-time');
if (display) {
  display.textContent = result;
}
