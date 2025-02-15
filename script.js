// script.js
const correctPins = {
    1: '0425',
    2: '8296',
    3: '4623',
    4: '2537',
    5: '5148',
    6: '8416',
    // Add a PIN for the reset functionality
    reset: '0000' // Set your own PIN for reset
  };
  
  function checkPin(boxNumber) {
    const userPin = document.getElementById('pin' + boxNumber).value;
    const box = document.getElementById('box' + boxNumber);
    const question = document.getElementById('question' + boxNumber);
  
    if (userPin === correctPins[boxNumber]) {
      box.classList.add('opened');
      box.querySelector('button').disabled = true;
      box.querySelector('input').disabled = true;
      localStorage.setItem('box' + boxNumber, 'opened');
      alert('Kotak ' + boxNumber + ' terbuka!');
    } else {
      alert('PIN salah. Coba lagi.');
    }
  }
  
  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }
  
  function verifyResetPin() {
    const resetPin = document.getElementById('resetPin').value;
    
    if (resetPin === correctPins.reset) {
      resetGame(); // Call reset game function if PIN is correct
    } else {
      alert('PIN untuk reset salah. Coba lagi.');
    }
  }
  
  function resetGame() {
    // Clear localStorage to reset the game state
    localStorage.clear();
  
    for (let i = 1; i <= 6; i++) {
      const box = document.getElementById('box' + i);
      const pinInput = document.getElementById('pin' + i);
      const button = box.querySelector('button');
  
      box.classList.remove('opened');
      pinInput.value = ''; // Clear the PIN input
      button.disabled = false;
      pinInput.disabled = false;
    }
  
    // Clear the reset PIN input field after reset
    document.getElementById('resetPin').value = ''; // Clear reset PIN input
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i <= 6; i++) {
      if (localStorage.getItem('box' + i) === 'opened') {
        const box = document.getElementById('box' + i);
        box.classList.add('opened');
        box.querySelector('button').disabled = true;
        box.querySelector('input').disabled = true;
      }
    }
  });
  
