let elementArray
do{
    elementArray = +prompt("How many elements in the array do you want (min 5 or max 20 elements)")
}while(elementArray < 5 || elementArray > 20 || elementArray !== elementArray)

// first func
function fillArray(length){
    let resultArr = [],
        addNum;
    for( let i = 0; i < length; i++ ){
        do{
            addNum = +prompt("Please enter a new array item")
        }while (addNum !== addNum);
        resultArr.push(addNum)
    }
    return resultArr;
}

// second func
function sortArray(arr){
    var n = arr.length;
    for (var i = 0; i < n-1; i++)
    { var min = i;
        for (var j = i+1; j < n; j++)
        { if (arr[j] < arr[min]) min = j; }
        var t = arr[min]; arr[min] = arr[ i ]; arr[ i ] = t;
    }
    return arr;
}

// third func
function printArray(count){
    console.log(count);
    alert(count);
}

let fullArray = fillArray(elementArray);
let sortedAscending = sortArray(fullArray);
printArray(sortedAscending);
