
// рекурсия
function factorial(n) {
    if(n == 1) return 1;
    return n * factorial(n - 1);
}
console.log(`Факториал рекурсия ${factorial(8)}`);
console.log(`Факториал рекурсия ${factorial(2)}`);
console.log(`Факториал рекурсия ${factorial(122)}`);

// цикл
function factorialCycle(b) {
    let total = 1;
    for (let i = 0; i < b; i++) {
        total = total * (b - i);
    }
    return total;
}
console.log(`Факториал цикл ${factorialCycle(3)}`);
console.log(`Факториал цикл ${factorialCycle(5)}`);
console.log(`Факториал цикл ${factorialCycle(9)}`);

// Массивы
function arrNum(myArr, userNum) {
    let maxNum = false; // number is greater than any array element
    myArr.forEach(function (item, i) {
        if (userNum > myArr[i]) {
            maxNum = true;
        }
    });
    if (maxNum) {
        myArr.shift();
        myArr.push(userNum);
    } else {
        myArr.unshift(userNum);
        myArr.pop();
    }
    return myArr;
}
console.log(`Добавления числа в массив ${arrNum([5,6,8,55], 2)}`)
console.log(`Добавления числа в массив ${arrNum([5,6,8,55], 60)}`)
console.log(`Добавления числа в массив ${arrNum([5,6,8,55], 10)}`)
console.log(`Добавления числа в массив ${arrNum([5,6,8,55], -1)}`)
