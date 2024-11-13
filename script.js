let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);  // Removes the last character
  document.getElementById('display').value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('display').value = currentInput;
  } catch (e) {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}
