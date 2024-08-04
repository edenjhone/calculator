# Calculator Project

## Overview

This project is a simple, functional calculator created using HTML, CSS, and JavaScript. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also includes additional functionalities like clearing the input and deleting the last digit entered.

## Features

- **Basic Arithmetic Operations**: Perform addition, subtraction, multiplication, and division.
- **Clear (AC) Function**: Reset the input field to zero.
- **Delete (DEL) Function**: Remove the last digit entered.
- **Responsive Design**: Adapt to different screen sizes for better usability on various devices.
- **User-Friendly Interface**: Simple and intuitive layout for ease of use.

## Technologies Used

- **HTML**: For structuring the calculator interface.
- **CSS**: For styling the calculator and making it visually appealing.
- **JavaScript**: For implementing the functionality and interactivity of the calculator.

## Code Structure

### HTML

The HTML file defines the structure of the calculator. It includes buttons for numbers, arithmetic operations, and special functions like clear and delete.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator">
        <div id="user-input" class="display">0</div>
        <div class="buttons">
            <button class="numbers">1</button>
            <button class="numbers">2</button>
            <button class="numbers">3</button>
            <button class="operations">+</button>
            <button class="numbers">4</button>
            <button class="numbers">5</button>
            <button class="numbers">6</button>
            <button class="operations">-</button>
            <button class="numbers">7</button>
            <button class="numbers">8</button>
            <button class="numbers">9</button>
            <button class="operations">*</button>
            <button class="numbers">0</button>
            <button class="operations">/</button>
            <button class="operations">%</button>
            <button class="operations">=</button>
            <button class="operations">DEL</button>
            <button class="operations">AC</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

CSS
The CSS file provides styling to make the calculator look clean and modern. It includes styles for the display area and buttons.
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: #f4f4f4;
}

.calculator {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 300px;
    width: 100%;
}

.display {
    background: #222;
    color: #fff;
    font-size: 2em;
    padding: 10px;
    text-align: right;
    border-radius: 5px;
    margin-bottom: 20px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    padding: 20px;
    font-size: 1.5em;
    border: none;
    border-radius: 5px;
    background: #eee;
    cursor: pointer;
}

button.operations {
    background: #f90;
    color: #fff;
}

button.operations:hover, button.numbers:hover {
    background: #ddd;
}
JavaScript
The JavaScript file handles the calculator's functionality, including event listeners for button clicks and performing arithmetic operations.
const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const operation = e.target.innerHTML.trim();
        let lastValue = inputValue.innerText.slice(-1);

        if (operation === "=") {
            if (!isNaN(lastValue)) {
                inputValue.innerText = eval(inputValue.innerText);
            }
        } else if (operation === "AC") {
            inputValue.innerText = "0";
        } else if (operation === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1);
            if (inputValue.innerText === "") {
                inputValue.innerText = "0";
            }
        } else {
            if (!isNaN(lastValue) || lastValue === ")") {
                inputValue.innerText += operation;
            }
        }
    });
});
