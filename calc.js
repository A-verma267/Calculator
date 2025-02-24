let string = "";
let buttons = document.querySelectorAll('.btn');
const plusMinusButton = document.getElementById('plusMinus');
const input = document.querySelector('input');
let previousResult = null;
let lastCharIsOperator = false;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (previousResult !== null) {
            if (e.target.innerHTML.match(/[0-9]/)) {
                input.value = '';
                previousResult = null;
                string = '';
            }
        }

        if (e.target.innerHTML == "+/-") {
            if (string !== "" && !isNaN(string)) {
                string = -string;
                input.value = string;
            } else {
                input.value = "ERROR";
            }
        }
        else if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
                previousResult = string;
            } catch (error) {
                input.value = "ERROR";
                string = "";
                input.value = "";
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == '%') {
            if (string !== "" && !isNaN(string)) {
                string = string / 100;
                input.value = string;
            } else {
                input.value = "ERROR";
            }
        } 
        else if (e.target.innerHTML=='.') {
            string += e.target.innerHTML;
            input.value = string;
        }
        else if (e.target.innerHTML.match(/[0-9]/)) {
            string += e.target.innerHTML;
            input.value = string;
            lastCharIsOperator = false;
        } else if (e.target.innerHTML.match(/[+\-*/]/)) {
            if (string !== "" && !lastCharIsOperator) {
                string += e.target.innerHTML;
                input.value = string;
                lastCharIsOperator = true;
            } else if (string === "") {
                input.value = "ERROR";
            }
        } else {
            input.value = "ERROR";
        }
    });
});