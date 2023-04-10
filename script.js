function calculate () {
    let firstNumber = Number(document.getElementById("firstNumber").value)
    let secondNumber = Number(document.getElementById("secondNumber").value)
    let operationSelected = document.getElementById("operation").value
    let answer = document.getElementById("result")
    answer.textContent = calculate2 (firstNumber, secondNumber, operationSelected)
}

function calculate2 (num1, num2, operation) {
    switch (operation) {
        case "addition":
            return num1+num2
            break;
        case "subtraction":
            return num1-num2
            break;
        case "multiplication":
            return num1*num2
            break;
        case "division":
            return num1/num2
            break;
        default:
            break;
    }
}