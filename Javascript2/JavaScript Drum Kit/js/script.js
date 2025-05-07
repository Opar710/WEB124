/*
  Name: Gianni
  Date: April 5, 2025
  File: script.js
  Description: Handles key and click interactions for the Drum Kit.
*/

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  // Determine if event is a keypress or click
  const keyCode = typeof e === 'number' ? e : e.keyCode || e.which;

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio || !key) return;

  key.classList.add('playing');
  audio.currentTime = 0; // Rewind to start
  audio.play();
}

// Get all key elements
const keys = Array.from(document.querySelectorAll('.key'));

// Add event listeners
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', () => {
    const keyCode = parseInt(key.getAttribute('data-key'));
    playSound(keyCode);
  });
});

window.addEventListener('keydown', playSound);
