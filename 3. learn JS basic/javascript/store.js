// Store Js

const fruits = {
    apple: 1000,
    orange: 1200,
    mango: 500,
    banana: 350,
}
//need to give 5%tax 
//eg amount with 5% tax to give to goverment if cost is 100 = 100 * 0.5
function tax(amount , taxRate = 5) {
    let taxAmount = amount * (5 / 100);
    return taxAmount;
}
// console.log(tax(100))
let total = 0;

function buy(fruitNamesToPrice, quantity) {
    let cost = (quantity * fruits[fruitNamesToPrice]);

    let acturalCost = cost + tax(cost);

    total += acturalCost;

    return ` ${fruitNamesToPrice} : ${quantity} pcs = ${cost} mmk + ${tax(cost)} tex = ${acturalCost} mmks`;

    
}
console.log( buy ('apple', 20),)
console.log( buy ('orange', 6))
console.log( buy ('banana', 10))
console.log( buy ('mango', 13))

console.log(`Total : ${total} mmks    Thanks`)