let firstNum
let operator
let secondNum

const displayArea = document.querySelector('textarea#displayArea')
const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    displayArea.textContent += button.textContent
  })
})

function operate(opp, numOne, numTwo) {
  switch(opp) {
    case "+":
      add(numOne, numTwo)
      break;
    case "-":
      subtract(numOne, numTwo)
      break;
    case "*":
      multiply(numOne, numTwo)
      break;
    case "/":
      divide(numOne, numTwo)
      break;
    default:
      "Something went wrong"
  }
}

// Maths

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}