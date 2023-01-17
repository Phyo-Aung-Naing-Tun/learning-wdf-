// Area = width * breath;

let results = [];

function area(width,breath) {
    let areaSq = (width * breath) + " sqft";
    const resultDatas = {
        width: width + " ft",
        breath: breath + " ft",
        area: areaSq
    }
    results[results.length] = resultDatas;
    return areaSq;
}
console.log(area(400,500));
console.log(area(7700,500));
console.log(area(400,9000));
console.log(area(4600,9000));
console.log(area(709,9000));
console.table(results)

 console.table(results[results.length-1])