
function Burger(size) {
    this.size = size;
    this.toppings = [];
    this.properties = {
        [Burger.SIZES.small]: {
            price: 50,
            ccal: 150,
        },
        [Burger.SIZES.medium]: {
            price: 75,
            ccal: 200,
        },
        [Burger.SIZES.extra]: {
            price: 90,
            ccal: 400,
        },
    };

    this._init();
}

Burger.TOPPINGS = {
    mayo: {price: 20, ccal: 5},
    cheese: {price: 10, ccal: 20},
    salad: {price: 15, ccal: 5},
    potato: {price: 15, ccal: 10},
    seasoning: {price: 15, ccal: 0},
};

Burger.SIZES = {
    small: "small",
    medium: "medium",
    extra: "extra",
};

Burger.prototype._init = function () {
    const sizeProp = this.properties[this.size];
    this.price = sizeProp ? sizeProp.price : 0;
    this.ccal = sizeProp ? sizeProp.ccal : 0;
};

Burger.prototype.getPrice = function () {
    let toppingsPrice = 0;
    this.toppings.forEach(e => {
        toppingsPrice += e.price;
    });
    return this.price + toppingsPrice;
};

Burger.prototype.getCal = function () {
    return this.ccal + this.toppings.reduce((acc, e) => acc + e.ccal, 0);
};

Burger.prototype.addTopping = function (topping) {
    this.toppings.push(topping);
};

function ChessBurger(size) {
    this.size = size;
    this.properties = {
        [Burger.SIZES.small]: {
            price: 50,
            ccal: 175,
        },
        [Burger.SIZES.medium]: {
            price: 75,
            ccal: 200,
        },
        [Burger.SIZES.extra]: {
            price: 90,
            ccal: 400,
        },
    };

    this._init();
}

ChessBurger.prototype = new Burger();

function FishBurger(size) {
    this.size = size;
    this.properties = {
        [Burger.SIZES.small]: {
            price: 60,
            ccal: 85,
        },
        [Burger.SIZES.medium]: {
            price: 85,
            ccal: 100,
        },
        [Burger.SIZES.extra]: {
            price: 95,
            ccal: 300,
        },
    };

    this._init();
}
FishBurger.prototype = new Burger();

function CrabsBurger(size) {
    this.size = size;
    this.properties = {
        [Burger.SIZES.small]: {
            price: 65,
            ccal: 145,
        },
        [Burger.SIZES.medium]: {
            price: 80,
            ccal: 165,
        },
        [Burger.SIZES.extra]: {
            price: 110,
            ccal: 350,
        },
    };

    this._init();
}
CrabsBurger.prototype = new Burger();

const burgerForMe = new CrabsBurger(Burger.SIZES.extra);
burgerForMe.addTopping(Burger.TOPPINGS.cheese);
burgerForMe.addTopping(Burger.TOPPINGS.cheese);
burgerForMe.addTopping(Burger.TOPPINGS.salad);

console.log("Price with sauce: " + burgerForMe.getPrice());
console.log("Callories with sauce: " + burgerForMe.getCal());
