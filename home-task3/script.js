alert("Hello!");
let selectOperation = prompt("Please enter operation sign +,-,/,*,sin,cos,pow", "");
let firstNum = Number(prompt("Please enter the first number", ""));
let secondNum;
if(selectOperation !== "sin" && selectOperation !== "cos"){
    secondNum = Number(prompt("Please enter the second number", ""));
}

switch (selectOperation) {
    case '+':
        console.log(`Sum:  ${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
        break;
    case '-':
        console.log(`Diff: ${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
        break;
    case '*':
        console.log(`Mul: ${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
        break;
    case '/':
        console.log(`Div: ${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
        break;
    case 'pow':
        console.log(`Pow: ${firstNum} extent ${secondNum} = ${Math.pow(firstNum, secondNum)}`);
        break;
    case 'cos':
        console.log(`Cos: ${firstNum} = ${Math.cos(firstNum)}`);
        break;
    case 'sin':
        console.log(`Sin: ${firstNum} = ${Math.sin(firstNum)}`);
        break;
    default:
        console.log(`You entered an incorrect operation, please try again`);
}
