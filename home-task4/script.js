
let repeatOperation = true;
while (repeatOperation) {
    alert("Hello!");
    let selectOperation = prompt("Please enter operation sign +,-,/,*,sin,cos,pow", "");

    // first operand
    let firstNum = Number(prompt("Please enter the first number", ""));
    let i = 0;
    while (firstNum !== firstNum) {
        alert("Please enter correct the first number");
        firstNum = Number(prompt("Please enter the first number", ""));
        i++;
    }

    // second operand
    let secondNum;
    switch (selectOperation) {
        case '+':
        case '-':
        case '*':
        case '/':
        case 'pow':
            secondNum = Number(prompt("Please enter the second number", ""));
            break;
    }

    let j = 0;
    while (secondNum !== secondNum) {
        alert("Please enter correct the second number");
        secondNum = Number(prompt("Please enter the second number", ""));
        j++;
    }

    // result
    switch (selectOperation) {
        case '+':
            alert(`Sum:  ${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
            break;
        case '-':
            alert(`Diff: ${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
            break;
        case '*':
            alert(`Mul: ${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
            break;
        case '/':
            alert(`Div: ${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
            break;
        case 'pow':
            alert(`Pow: ${firstNum} extent ${secondNum} = ${Math.pow(firstNum, secondNum)}`);
            break;
        case 'cos':
            alert(`Cos: ${firstNum} = ${Math.cos(firstNum)}`);
            break;
        case 'sin':
            alert(`Sin: ${firstNum} = ${Math.sin(firstNum)}`);
            break;
        default:
            alert(`You entered an incorrect operation, please try again`);
    }

    // repeat the calculation
    repeatOperation = confirm("Do you want to repeat the calculation?")
}
if (repeatOperation === false) {
    alert("Goodbye")
}


