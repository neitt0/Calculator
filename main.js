let firstNum
let operator
let secondNum

let temp = ''

const displayArea = document.querySelector('textarea#displayArea')
const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.parentElement.classList == 'clearBtns') {
      if (button.textContent == 'AC') {
        firstNum = ''
        operator = ''
        secondNum = ''
        temp = ''
        displayArea.textContent = ''
      } else if (button.textContent == 'C') {
        temp = ''
        displayArea.textContent = ''
      }

    } else if (button.parentElement.classList == 'numbers') {
      if (button.textContent == '.' && temp.includes('.')) {
        temp += ''
      } else if (button.textContent == '.' && temp == '') {
        temp = '0.'
      } else {
        temp += button.textContent
      }

      displayArea.textContent = temp

    } else if (button.parentElement.className == 'operations') {
      if (firstNum) {
        secondNum = displayArea.textContent
        displayArea.textContent = operate(firstNum, operator, secondNum)
        firstNum = displayArea.textContent
      }
      // reset temp but not display so the typed number can be assigned to firstNum
      temp = ''
      firstNum = displayArea.textContent
      operator = button.textContent

      if (button.textContent == '=') {
        firstNum = ''
        operator = ''
        secondNum = ''
      }

    }

    if (displayArea.textContent.length > 8) {
      displayArea.textContent = Number(displayArea.textContent).toFixed(8 - displayArea.textContent.indexOf('.'))
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