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
    const keyCode = e.keyCode || e.which || e;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    if (!audio) return;
  
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  
  const keys = Array.from(document.querySelectorAll('.key'));
  
  keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', () => {
      const keyCode = key.getAttribute('data-key');
      playSound(keyCode);
    });
  });
  
  window.addEventListener('keydown', playSound);  