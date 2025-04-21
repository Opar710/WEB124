/**
 * Name: Gianni
 * Date: April 10, 2025
 * Project: JavaScript30 - Key Detection
 * Modifications:
 * - Added on-screen display of typed letters
 * - Made secret code detection case-insensitive
 * - Added ESC key to clear the sequence
 * - Moved script into external JS file
 */

// Store pressed keys
const pressed = [];
const secretCode = 'wesbos';
const output = document.querySelector('.typed-output');

// Listen for keyup events
window.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    pressed.length = 0;
    output.textContent = 'Sequence cleared!';
    return;
  }

  pressed.push(e.key.toLowerCase());

  // Limit array to secretCode length
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  // Show user what they've typed
  output.textContent = pressed.join('').toUpperCase();

  // Check for match
  if (pressed.join('').includes(secretCode)) {
    output.textContent = '✨ DING DING! ✨';
    cornify_add();
  }
});
