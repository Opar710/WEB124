const rangeInput = document.getElementById('num');
const display = document.getElementById('num-display');
const results = document.getElementById('results');
const thumbLabel = document.getElementById('thumb-label');

// Addition
function addition(num) {
  const left = [];
  const right = [];
  for (let i = 1; i <= 10; i++) {
    const line = `<span>${num} + ${i} = ${num + i}</span>`;
    if (i <= 5) {
      left.push(line);
    } else {
      right.push(line);
    }
  }
  document.getElementById('addition').innerHTML =
    `<div class="column">${left.join('')}</div><div class="column">${right.join('')}</div>`;
}

// Subtraction
function subtraction(num) {
  const left = [];
  const right = [];
  for (let i = 1; i <= 10; i++) {
    const line = `<span>${num} - ${i} = ${num - i}</span>`;
    if (i <= 5) {
      left.push(line);
    } else {
      right.push(line);
    }
  }
  document.getElementById('subtraction').innerHTML =
    `<div class="column">${left.join('')}</div><div class="column">${right.join('')}</div>`;
}

// Multiplication
function multiplication(num) {
  const left = [];
  const right = [];
  for (let i = 1; i <= 10; i++) {
    const line = `<span>${num} × ${i} = ${num * i}</span>`;
    if (i <= 5) {
      left.push(line);
    } else {
      right.push(line);
    }
  }
  document.getElementById('multiplication').innerHTML =
    `<div class="column">${left.join('')}</div><div class="column">${right.join('')}</div>`;
}

// Division
function division(num) {
  const left = [];
  const right = [];
  for (let i = 1; i <= 10; i++) {
    const divisionResult = (num / i).toFixed(2).replace(/\.00$/, '');
    const line = `<span>${num} ÷ ${i} = ${divisionResult}</span>`;
    if (i <= 5) {
      left.push(line);
    } else {
      right.push(line);
    }
  }
  document.getElementById('division').innerHTML =
    `<div class="column">${left.join('')}</div><div class="column">${right.join('')}</div>`;
}

function runAll(num) {
  if (isNaN(num)) return;
  addition(num);
  subtraction(num);
  multiplication(num);
  division(num);
}

rangeInput.addEventListener('input', function () {
  const num = parseFloat(this.value);
  display.textContent = this.value;
  runAll(num);

  const percent = (num - this.min) / (this.max - this.min);
  const sliderWidth = this.offsetWidth;
  const thumbOffset = percent * sliderWidth;
  thumbLabel.style.left = `${thumbOffset}px`;
  thumbLabel.textContent = num;
});

runAll(0);