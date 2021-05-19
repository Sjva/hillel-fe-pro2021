const choiceSort = 1;
const choiceAddEven = 2;
const choiceSum = 3;

function operationWhisUserArray(message, separator) {
    if (!separator) {
        separator = ' ';
    }
    let elementArray;
    do {
        elementArray = prompt(message)
            .trim()
            .split(' ')
            .map(x => +x)
            .filter(item => !(item !== item));
    } while (elementArray.length < 3 || elementArray.length > 20);
    return elementArray
}

function getMenuResult(){
    const menu = `Please, select operation : \n 1- Sort ascending / descending; \n 2- Output all even / odd; \n 3- display the sum of all numbers, arithmetic mean, largest / smallest;`;
    let userChoice;
    do{
        userChoice = +prompt(menu)
    }while( !userChoice || userChoice > 3 && userChoice < 1);
    return userChoice;
}

function processUserChoice(choice, arr) {
    let delimiter,
        result,
        operationArrFirst,
        operationArrSecond,
        maxNum,
        minNum;

    switch (choice) {
        case choiceSort:
            delimiter = prompt(`Please, add delimiter for result:`);
            operationArrFirst = arr.slice().sort((a, b) => b - a).join(delimiter); //.slice() save new array
            operationArrSecond = arr.slice().sort((a, b) => a - b).join(delimiter);
            result = `Ascending - ${operationArrFirst} \n Descending - ${operationArrSecond} `;
            break;
        case choiceAddEven:
            delimiter = prompt(`Please, add delimiter for result:`);
            operationArrFirst = arr.filter(e => e % 2 !== 0).join(delimiter);
            operationArrSecond = arr.filter(e => e % 2 === 0).join(delimiter);
            result = `Odd - ${operationArrFirst} \n Even - ${operationArrSecond} `;
            break;
        case choiceSum:
            operationArrFirst = arr.reduce((a, b) => a + b);
            operationArrSecond = arr.reduce((a, b) => a + b) / arr.length;
            maxNum = Math.max.apply(null, arr);
            minNum = Math.min.apply(null, arr);
            result = `Sum of all numbers - ${operationArrFirst} \n Arithmetic mean - ${operationArrSecond} \n Max/Min - ${maxNum} / ${minNum} `;
            break;
    }

    alert(result);
    console.log(result)
}
