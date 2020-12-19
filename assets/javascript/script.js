//create class of calculator for button commands

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.'))
            return
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
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

    getDisplayNumber(number) {
        var stringNumber = number.toSting();
        var integerDigits = parseFloat(stringNumber.split('.')[0]);
        var decimalDigits = stringNumber.split('.')[1];
        var intergerDisplay;
        if (isNaN(integerDigits)) {
            intergerDisplay = '';
        } else {
            intergerDisplay = intergerDisplay.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${intergerDisplay}.${decimalDigits}`
        } else {
            return intergerDisplay;
        }

        // var floatNumber = parseFloat(number);
        // if (isNaN(floatNumber))
        // return '';
        // return floatNumber.toLocalString('en');
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = '';
        }
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


equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})