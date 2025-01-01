document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.fream h1');

    let currentInput = '0';
    let memory = 0;
    let operator = null;
    let previousValue = null;
    let isCalculating = false;

    const updateDisplay = () => {
        display.textContent = currentInput;
    };

    const clearAll = () => {
        currentInput = '0';
        operator = null;
        previousValue = null;
        isCalculating = false;
    };

    const clearEntry = () => {
        currentInput = '0';
    };

    const toggleSign = () => {
        currentInput = (parseFloat(currentInput) * -1).toString();
    };

    const handleNumber = (number) => {
        if (isCalculating) {
            currentInput = number;
            isCalculating = false;
        } else if (currentInput === '0') {
            currentInput = number;
        } else {
            currentInput += number;
        }
    };

    const handleOperator = (op) => {
        if (previousValue === null) {
            previousValue = parseFloat(currentInput);
        } else if (operator) {
            const result = calculate(previousValue, parseFloat(currentInput), operator);
            previousValue = result;
            currentInput = result.toString();
        }
        operator = op;
        isCalculating = true;
    };

    const calculate = (a, b, op) => {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '×': return a * b;
            case '÷': return a / b;
            default: return b;
        }
    };

    const handleEquals = () => {
        if (operator && previousValue !== null) {
            const result = calculate(previousValue, parseFloat(currentInput), operator);
            currentInput = result.toString();
            operator = null;
            previousValue = null;
        }
    };

    const handleMemory = (action) => {
        switch (action) {
            case 'MC': memory = 0; break;
            case 'MR': currentInput = memory.toString(); break;
            case 'M+': memory += parseFloat(currentInput); break;
            case 'M-': memory -= parseFloat(currentInput); break;
        }
    };

    document.querySelectorAll('.b1').forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.textContent;

            if (!isNaN(value)) {
                handleNumber(value);
            } else if (value === 'C') {
                clearEntry();
            } else if (value === 'AC') {
                clearAll();
            } else if (value === '+/-') {
                toggleSign();
            } else if (['+', '-', '×', '÷'].includes(value)) {
                handleOperator(value);
            } else if (value === '=') {
                handleEquals();
            } else if (['MC', 'MR', 'M+', 'M-'].includes(value)) {
                handleMemory(value);
            } else if (value === '.') {
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                }
            }

            updateDisplay();
        });
    });

    document.addEventListener('keydown', (e) => {
        const key = e.key;

        if (!isNaN(key)) {
            handleNumber(key);
        } else if (key === 'Backspace') {
            currentInput = currentInput.slice(0, -1) || '0';
        } else if (key === 'Escape') {
            clearAll();
        } else if (key === 'Enter' || key === '=') {
            handleEquals();
        } else if (['+', '-', '*', '/'].includes(key)) {
            const opMap = { '*': '×', '/': '÷' };
            handleOperator(opMap[key] || key);
        } else if (key === '.') {
            if (!currentInput.includes('.')) {
                currentInput += '.';
            }
        }

        updateDisplay();
    });

    updateDisplay();
});
