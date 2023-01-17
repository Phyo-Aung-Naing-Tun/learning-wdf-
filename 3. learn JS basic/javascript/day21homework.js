// day 21 real life examples (Homework)

// ၁ မနက် ၈ နာရီကျော်တာတောင်မထသေးရင် တုတ်နဲ့ လာ နှိုးမည်။

function howToWeakUp(time) {
    if (time > 8) return `တုတ် နဲ့ ရိုက် မယ်။` ;

    return `မရိုက် ဘူး။`


}
console.log(howToWeakUp(9));
console.log(howToWeakUp(6));

// How to go to school

function howToGoToSchool(money) {
    if (money >= 1000) {
        return `Be happy and Say thanks to your mon`
    } 
    else if (money >= 300) {
        return `You can take a bus.`;
    } else {
     return `You can walk or you can complain to your mon `

    }
}

console.log(howToGoToSchool(100));
console.log(howToGoToSchool(500));
console.log(howToGoToSchool(1200))


// 3 to arrive school intime
 
function checkingOpenOrClose(time) {
    if ( time < 10) {
        return `Teacher is waiting to start class`;
    } 
    return `Teacher will start teaching.`
} ;

console.log(checkingOpenOrClose(9));
console.log(checkingOpenOrClose(10));

// 4 Checking exam result

function checkingResult(mark) {
    if (mark >= 80) {
        return `You get D`
    } else if (mark >= 40) {
        return `Pass`
    } else {
        return `Fill`
    }
}
 
console.log(checkingResult(20))
console.log(checkingResult(90))
console.log(checkingResult(41))
console.log(checkingResult(40))
