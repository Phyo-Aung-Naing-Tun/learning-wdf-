// Conditional Statement Homework

// First 5 projects
// 1 . မီးလာ မီးပျက်

// ည ၉ နာရီကနေ မနက် ၁ နာရီထိ မီးပျက် မယ်

function isElectricityOnAt(hour,ampm) {
    if ((hour >= 9) && (ampm == "pm")) {
        return `The electricity is off at 9 pm to 1 am . Sorry :)`}
        return `The electricity is on.`;
    }
 
 console.log(isElectricityOnAt(12,"pm"));
 console.log(isElectricityOnAt(1,"am"));

 // 2 . ရုံးဖွင့် ရက်


 function isOfficeOpened (days ) {
    if ( days == "Sunday") {
        return `Office is closed`;
    }
        return `Office is opened`
 }
 
 console.log(isOfficeOpened( "Sunday"))
 console.log(isOfficeOpened( "OtherDays"))

 // 3 . Are you 18 years old

 let canOpenOrNot = function (age) {
    if ( age < 18) {
        let timesToWait = 18 - age;
        return `Sorry! You are not allowed to open our Web. Plz wait ${timesToWait} years`
    }
    return `Welcome to our Web`
 }
 console.log(canOpenOrNot(10))
 console.log(canOpenOrNot(23))

 // 4 . Can I have hotpot free?

 function hotpotFree(quantity) {
    if (quantity >= 10) {
        return "Thank you .Now, you can get hotpotFree for extra one person";
    }
    return "Thanks";
 }
 console.log(hotpotFree(4))
 console.log(hotpotFree(15))

 //5 . A chance to attend medical university
   
 function checkYourMark (mark) {
    if (mark < 590) {
        return "Sorry! Don't give up until your last breath";
    }
    return "Congratulations"
 }

 console.log(checkYourMark(300))
 console.log(checkYourMark(590))

 // Second 5 projects
 // 1 မုန့်စား

//  hotpot = 20000;
//  streetFoods = 5000;
//  teaShop = 2000;

function whereICanGo (money) {
    if (money >= 20000) {
        return `go and have hotpot`
    } else if (money >= 5000) {
        return `go and have street-foods`
    } else { 
        return `go to tea shop`
    }
}
console.log(whereICanGo(49999))
console.log(whereICanGo(5000))
console.log(whereICanGo(2000))

// 3 . Buying a computer

// // apple = 3000000;
// lenovo = 1500000;
// goodsSecond = 500000;
// second = 300000;

function toBuyComputer( money ) {
     if (money >= 3000000) {
        return `You can buy apple`;
     } else if (money >= 1500000) {
        return `You can buy lenovo`;
     } else if (money >= 500000) {
        return `You can buy goodsercond`;
     } else if (money >=300000) { return `You can buy second`} else { return `You can buy no computer`}
}

console.log(toBuyComputer(5000000))
console.log(toBuyComputer(500000))
console.log(toBuyComputer(500))
console.log(toBuyComputer(2000000))
console.log(toBuyComputer(400000))

// 3 . Promotion event

// goldmember = 50%;
// silvermember = 20%;
// normal = 'noDis';

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

// 4. skills for More Salary

function skillCheck ( skill = "nothing" ) {
    if (skill == "english") {
        return `You salary is over 5 lakhs`;
    } else if (skill == "chinese") {
        return `You salary is over 4 lakhs`;
    } else if (skill == "computer-basic") {
        return `You salary is 2 lakhs`
    } else {
        return `Your salary is 150000 lakhs`
    }
}
 console.log(skillCheck("english"));
 console.log(skillCheck("chinese"));
 console.log(skillCheck("computer-basic"));
 console.log(skillCheck(" "));

 // Giving medals for 100m race

 function checkScores(score) {
    if (score == 1) {
        return `Congratulations ! You get Gold Medal`
    } else if (score == 2) {
        return `Congratulations ! You get Silver Medal`
    } else if (score == 3) {
        return `Congratulations ! You get Third Prize`
    } else {
        return `Sorry! Try your best next time.`
    }
 }

 console.log (checkScores(1));
 console.log (checkScores(2));
 console.log (checkScores(3));
 console.log (checkScores(4));


 // Done