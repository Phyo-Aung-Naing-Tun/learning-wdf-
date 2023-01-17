// Currency Exchange

// Currency Exchange to MMK

// MMK = otherCurrencyAmout * rate.usd or sth

const rates = {
    usd : 2100,
    eur : 2180,
    sgd : 1450, 
}

function toMMK(amount, exchangeRate){
    let MMK = (amount * rates[exchangeRate]) + " mmk";
    return MMK;
}

function toAnyCurrency(presentCur, exchangeRates, purposeCur) {
    let result = (presentCur * rates[exchangeRates]) / rates[purposeCur] + " " + purposeCur;
    return result
}
console.log(toAnyCurrency(500, 'usd', 'sgd'))
console.log(toAnyCurrency(50, 'eur', 'usd'))
console.log(toAnyCurrency(1, 'usd', 'sgd'))
console.log(toAnyCurrency(500, 'usd', 'mmk'))


console.log(toMMK(5000 , "usd"))
console.log(toMMK(5000 , "sgd"))
console.log(toMMK(5000 , "eur"))
console.log(toMMK(50 , "sgd"))



// to any currency to any currenct
// amout to mmk to to any
// amout to mmk = amout * exchangeRate
// mmk to anycurrency = mmk / exchangeRate


















