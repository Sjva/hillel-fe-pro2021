let repeatOperation = true;
let arrNum,
    resultArr,
    result,
    resultSlice,
    findNumber,
    selectionOperations,
    listOperation,
    delimiter,
    operationArrFirst,
    operationArrSecond,
    maxNum,
    minNum;

function operationFirst(arr) {
    delimiter = prompt(`Please, add delimiter for result:`);
    operationArrFirst = arr.slice().sort((a, b) => b - a).join(delimiter); //.slice() save new array
    operationArrSecond = arr.slice().sort((a, b) => a - b).join(delimiter);
    return `Ascending - ${operationArrFirst} \n Descending - ${operationArrSecond} `;
}

function operationSecond(arr) {
    delimiter = prompt(`Please, add delimiter for result:`);
    operationArrFirst = arr.filter(e => e % 2 !== 0).join(delimiter);
    operationArrSecond = arr.filter(e => e % 2 === 0).join(delimiter);
    return `Odd - ${operationArrFirst} \n Even - ${operationArrSecond} `;
}

function operationThird(arr) {
    operationArrFirst = arr.reduce((a, b) => a + b);
    operationArrSecond = arr.reduce((a, b) => a + b) / arr.length;
    maxNum = Math.max.apply(null, arr);
    minNum = Math.min.apply(null, arr);
    return `Sum of all numbers - ${operationArrFirst} \n Arithmetic mean - ${operationArrSecond} \n Max/Min - ${maxNum} / ${minNum} `;
}

function operationWhisUserArray(oldArray) {

    if (oldArray) {
        arrNum = oldArray;
    }
    else {
        // user add number for array
        do {
            let elementArray = prompt("Please, entered an array separated by a space (min 3 or max 20 elements)");

            // add element array and made number
            function fillArray(length) {
                resultArr = length.split(' ');
                resultSlice = resultArr.map(x => +x);
                findNumber = resultSlice.filter(item => !(item !== item));
                console.log(findNumber);

                return findNumber;
            }

            arrNum = fillArray(elementArray);

        } while (findNumber.length < 3 || findNumber.length > 20);
    }

    // Select operation for array number
    do {
        listOperation = +prompt(`Please, select operation : \n 1- Sort ascending / descending; \n 2- Output all even / odd; \n 3- display the sum of all numbers, arithmetic mean, largest / smallest;`);
    } while (listOperation !== 1 && listOperation !== 2 && listOperation !== 3);

    switch (listOperation) {
        case 1:
            result = operationFirst(arrNum);
            break;
        case 2:
            result = operationSecond(arrNum);
            break;
        case 3:
            result = operationThird(arrNum);
            break;
    }

    alert(result);
    console.log(result)
}
operationWhisUserArray();

while (repeatOperation) {
    // Questions for new operation
    repeatOperation = confirm("Do you want to repeat the operation");

    // New operation
    if (repeatOperation === true) {
        do {
            selectionOperations = +prompt(`1- Repeat with old array \n 2- Repeat with new array`);
            if (selectionOperations === 1) {
                operationWhisUserArray(arrNum);
            } else if (selectionOperations === 2) {
                operationWhisUserArray();
            }
        } while (selectionOperations !== 1 && selectionOperations !== 2);
    }
}





