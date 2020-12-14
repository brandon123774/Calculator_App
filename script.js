//create class of calculator for button commands

class calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes('.')
        ) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !=='')   {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }
    compute() {
        var computation;
        var prev = parseFloat(this.previousOperand);
        var current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+': 
                computation = prev + current;
                break;
            case '-': 
                computation = prev - current;
                break;
            case '*': 
                computation = prev * current;
                break;
            case '÷': 
                computation = prev / current;
                break;
            default: 
            return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;

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
var calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()

    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()

    })
})


equalsButton.addEventListener('click', button =>   {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button =>   {
    calculator.compute();
    calculator.updateDisplay();
})