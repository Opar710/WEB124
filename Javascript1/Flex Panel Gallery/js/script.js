/*
  Name: Gianni
  Date: April 6, 2025
  Project: Flex Panels (JavaScript30)
  Changes:
    - Toggle open class on panel click
    - Animate content based on flex-grow transition end
*/

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
