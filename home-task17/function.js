export let str = "Только тогда познается ценность времени, когда оно утрачено. Только тогда познается ценность времени, когда оно утрачено.";
let operationHistory = [];

function saveHistory(operation, argument, result) {
    operationHistory.push(`Операция - "${operation}", Аргумент - "${argument}", Результат - "${result}"`);
}

export function reverse(str) { //разворачивает строку
    let result = str.split("").reverse().join("");
    saveHistory('reserve', str, result);
    return result;
}
export function nTimes(str, times) { //возвращает новую строку, str в которой, повторяется times-раз
    let result = str.repeat(times);
    saveHistory('nTimes', [str, times], result);
    return result;
}
export function removeDuplicates(str) { //удаляет повторения в строке
    let result = str.split(" ").filter(function(item, i, allItems){
        return i === allItems.indexOf(item);
    });
     result = result.join(" ");
    saveHistory('removeDuplicates', str, result);
    return result;
}
export function getPart(str) { //возвращает половину строки
    let result = str.substr(0, Math.floor(str.length / 2));
    saveHistory('getPart', str, result);
    return result;
}
export function getHistory() { //возвращает историю операций
  return operationHistory;
}
