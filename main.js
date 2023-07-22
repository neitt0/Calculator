let firstNum
let operator
let secondNum

let temp = ''

const displayArea = document.querySelector('textarea#displayArea')
const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.parentElement.classList == 'numbers') {
      temp += button.textContent
      displayArea.textContent = temp
    } 
    // else if (button.textContent == '=') {
    //   secondNum = displayArea.textContent
    //   displayArea.textContent = operate(firstNum, operator, secondNum)
    //   firstNum = displayArea.textContent
    // } 
    else if (button.parentElement.className == 'operations') {
      if (firstNum) {
        secondNum = displayArea.textContent
        displayArea.textContent = operate(firstNum, operator, secondNum)
        firstNum = displayArea.textContent
      }
      temp = ''
      firstNum = displayArea.textContent
      operator = button.textContent
      if (button.textContent == '=') {
        firstNum = ''
        operator = ''
        secondNum = ''
      }
    }
  })
})

function operate(numOne, oper, numTwo) {
  switch(oper) {
    case "+":
      return add(numOne, numTwo)
    case "-":
      return subtract(numOne, numTwo)
    case "*":
      return multiply(numOne, numTwo)
    case "/":
      return divide(numOne, numTwo)
    default:
      "Something went wrong"
  }
}

// Maths

function add(a, b) {
  return Number(a) + Number(b)
}

function subtract(a, b) {
  return Number(a) - Number(b)
}

function multiply(a, b) {
  return Number(a) * Number(b)
}

function divide(a, b) {
  return Number(a) / Number(b)
}