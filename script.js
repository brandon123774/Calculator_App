//create class of calculator for button commands

class calculator{
    constructor(previousOperandTextElement, currentOperandTextElement)  {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete()    {   

    }

    apendNumber(number) {

    }

    chooseOperation(operation)   {

    }
    compute()   {

    }

    updateDisplay() {

    }
}


//create all variables from html
var numberButtons = document.querySelectorAll('[data_number]')
var operationButtons = document.querySelectorAll('[data_operation]')
var equalsButton = document.querySelectorAll('[data_equals]')
var deleteButton = document.querySelectorAll('[data_delete]')
var allClearButton = document.querySelectorAll('[data_all_clear]')
var previousOperandTextElement = document.querySelectorAll('[data_previous_operand]')
var currentOperandTextElement = document.querySelectorAll('[data_current_operand]')

//create calculator variable and then create function for number buttons to work on click
var calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>  {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()

    })
})