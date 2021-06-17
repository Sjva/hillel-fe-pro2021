const SIZE_SMALL = {price: 50, calories: 20};
const SIZE_MIDDLE = {price: 75, calories: 30};
const SIZE_BIG = {price: 100, calories: 40};

const TOPPING_CHEESE = {price: 10, calories: 20};
const TOPPING_SALAD = {price: 15, calories: 5};
const TOPPING_POTATO = {price: 15, calories: 10};
const TOPPING_SEASONING = {price: 15, calories: 0};
const TOPPING_MAYO = {price: 20, calories: 5};

function Hamburger(size) {
    this.size = size;
    this.totalPrice = size.price;
    this.totalCalories = size.calories;
    this.getPrice = getPrice;
    this.getCallories = getCallories;
    this.addTopping = addTopping;
}

function getPrice() {
    return this.totalPrice;
}
function getCallories() {
    return this.totalCalories;
}

function addTopping(topping) {
    this.totalPrice = this.totalPrice +  topping.price;
    this.totalCalories = this.totalCalories + topping.calories;
}

const hamburger = new Hamburger(SIZE_BIG);

// добавки
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_POTATO);
hamburger.addTopping(TOPPING_SALAD);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());
