const fruits = {
    apple : 1000,
    orange : 2000,
    banana : 300
}



let total = 0;
const saleRecord = [];
function costfun(fruitPrice, quantity, member = "normal") {
    let cost = fruits[fruitPrice] * quantity;
    if (member === "gold") {
        let totalCost = cost * 0.5;

        total += totalCost;
        let totalObject = {
            total : total,
        }

        let recordObj = {
            member : member,
            name  : fruitPrice,
            price : fruits[fruitPrice],
            quantity   : quantity,
            beforeDiscount : cost,
            discount : "50%",
            afterDiscount : totalCost,
        };
        
        saleRecord[saleRecord.length] = recordObj;
        saleRecord[saleRecord.length] = totalObject;



        return `  ${member} member / ${fruitPrice} : ${quantity} = ${cost} - 50% = ${totalCost} mmks`;
    }
    else if (member === "silver") {
        let totalCost = cost * 0.8;

        total += totalCost;

        let totalObject = {
            total : total,
        }

        let recordObj = {
            member : member,
            name  : fruitPrice,
            price : fruits[fruitPrice],
            quantity   : quantity,
            beforeDiscount : cost,
            discount : "20%",
            afterDiscount : totalCost,
        };

        saleRecord[saleRecord.length] = recordObj;

    
        saleRecord[saleRecord.length] = totalObject;

        return `  ${member} member / ${fruitPrice} : ${quantity} = ${cost} - 20% = ${totalCost} mmks`;
    } else {
        let totalCost = cost;
        total += totalCost;

        let totalObject = {
            total : total,
        }

        let recordObj = {
            member : member,
            name  : fruitPrice,
            price : fruits[fruitPrice],
            quantity   : quantity,
            beforeDiscount : cost,
            discount : "0%",
            afterDiscount : totalCost,
        };
        saleRecord[saleRecord.length] = recordObj;
        
        saleRecord[saleRecord.length] = totalObject;

        return `  ${member} member / ${fruitPrice} : ${quantity} = ${cost}  mmks`;
    }
}
console.log(costfun("apple", 10 , "gold"))
console.log(costfun("orange", 1 , "silver"))
console.log(costfun("banana", 1 ))

console.log(costfun("apple", 10 , "gold"))
console.log(costfun("orange", 11 , "silver"))
console.log(costfun("banana", 211 ))

console.log("Total : " + total + " mmks" ) // wow

console.table(saleRecord);