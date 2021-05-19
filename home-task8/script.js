function calc(a) {
    return{
        add: (e) => a = a + e,
        sub: (e) => a = a - e,
        div: (e) => a = a / e,
        mult: (e) => a = a * e,
        getResult: () => a
    }
}
const first = calc(4);

first.add(33);
first.sub(12);
first.div(2);
first.mult(4);

console.log(first.getResult()); // 50
