/*
  Name: Gianni
  Date: April 6, 2025
  Project: Scoped CSS Variables and JS (JavaScript30)
  Changes:
    - JS dynamically updates CSS variables based on input values
*/

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    const value = this.value + suffix;
    document.documentElement.style.setProperty(`--${this.name}`, value);
  
    // Update the visible value preview
    const valueDisplay = document.getElementById(`${this.name}-val`);
    if (valueDisplay) valueDisplay.textContent = value;
  }  

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));