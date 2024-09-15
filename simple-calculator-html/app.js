document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    const display = document.getElementById('display');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.textContent;

            if (value === 'C') {
                currentInput = '';
                display.value = '';
            } else if (value === '=') {
                try {
                    display.value = eval(currentInput);
                    currentInput = display.value;
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
