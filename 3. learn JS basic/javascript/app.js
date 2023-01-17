// // function sum(  ) {
// //     let solution = 8 + 5;
// //     console.log(solution)
// // }
// // sum()
// // let marks = 30;
// // function result() {
// //     let win = (marks < 40) ? "false" : "true"
// //     return win
// // }
// // // console.log(result())
// // function ထဲက value တစ်ခုခု return ပြန်လုပ်ချင်ရင် return keyword ကို  function ထဲမှာ ရေးပြီး console.log ထဲမှာ function ပြန်ခေါ်ပါ။

// //Parameters
// // function inchesToFeets(inches) {
// //     let feets = inches / 12;
// //     return feets
// // }
// // console.log(inchesToFeets(55))
// // console.log(inchesToFeets(5.9))
// // console.log(inchesToFeets(12))
// // console.log(inchesToFeets(444))
// // console.log(inchesToFeets(0))
// //Answers
// // 4.583333333333333
// // app.js:20 0.4916666666666667
// // app.js:21 1
// // app.js:22 37
// // app.js:23 0

// //Arrays

// // let fruits = ["apple","orange","mango","banana"];
// // console.log(fruits[0]) //apple
// // console.log(fruits[1]) //orange
// // console.log(fruits[2]) //mango
// // console.log(fruits[3]) //banana

// // fruits[1] = "lemon" //
// // // (4) ['apple', 'lemon', 'mango', 'banana']
// // console.log(fruits.length) //4
// // console.log(fruits[fruits.length-1])  //banana

// // let pant = [];

// // pant[1] = 28;           //pant
//                             // (6) [empty, 28, empty × 3, 'developer']
// // pant[5] = "developer";

// // let fruits = [];
// // fruits[fruits.length] = "apple";
// // fruits[fruits.length] = "banana";
// // fruits[fruits.length] = "mango";
// // fruits[fruits.length] = "lemon";
// // fruits[fruits.length] = "watermaloon";
// // console.log(fruits)
// //Answer

// // (5) ['apple', 'banana', 'mango', 'lemon', 'watermaloon']0: "apple"1: "banana"2: "mango"3: "lemon"4: "watermaloon"length: 5[[Prototype]]: Array(0)

// // let pf = [
// //     "pant",
// //     23,
// //     ["html","css","sale","english"],
// //     ["developer","promoter"],
// //     "Insein",
// //     null,
// //     true
// //     ]

// // console.log(pf)
// // console.log(`
// //     My name is ${pf[0]}. I am ${pf[1]} years old. I am good at ${pf[2]} and I am a ${pf[3][0]} and ${pf[3][1]}}. I live in ${pf[4]} and I have ${pf[5]} girlfriend. 
// // `)

//Object and some practices

// let name = "mg mg";
// let age = 15;
// let township = "kyaunt myaung";
// let money = 200;
//     money -= 50;
// let mgmgBag = ["mm","eng","bio",""];
// let canSmokeMgMg = false;
// let canSmokeMgMgFriend = true;

// const mgmgObject = {
//     name,
//     age,
//     township,
//     money,
//     mgmgBag,
//     canSmokeMgMg,
//     canSmokeMgMgFriend
// }

// const zawzawObject = {
//     name : "zaw zaw",
//     age : 16,
//     township : "hlaing thar yar",
//     money : 500,
//     mgmgBag : ["mm"],
//     canSmokeMgMg : false,
//     canSmokeMgMgFriend : true
// }

// const myamyaObject = {
//     name : "mya mya",
//     age : 15,
//     township : "insein",
//     money : 1000,
//     mgmgBag : ["mm", "eng", "bio", "che", "phy"],
//     canSmokeMgMg : false,
//     canSmokeMgMgFriend : true
// }

// console.log(mgmgObject.name)
// console.log(zawzawObject)
// console.log(myamyaObject)

// const students = [
//     {
//         name,
//         age,
//         township,
//         money,
//         mgmgBag,
//         canSmokeMgMg,
//         canSmokeMgMgFriend
//     },
//     {
//         name : "zaw zaw",
//         age : 16,
//         township : "hlaing thar yar",
//         money : 500,
//         zawzawBag : ["mm"],
//         canSmokeMgMg : false,
//         canSmokeMgMgFriend : true
//     },
//     {  
//         name : "mya mya",
//     age : 15,
//     township : "insein",
//     money : 1000,
//     myamyaBag : ["mm", "eng", "bio", "che", "phy"],
//     canSmokeMgMg : false,
//     canSmokeMgMgFriend : true
//     }
// ];

// console.log(students[0].mgmgBag[1])
// students[2].height = 15 + 'ft'; 
// //  console.log(students[2])

//Increasement & Decreasement Operators

// let x = 5;
// console.log(++x)  6
// console.log(x++)  6
// console.log(x)  7

//Logical Operators
// let condition = true;
//     condition = !condition;


// console.log(condition)

//Ternary Operator (?)

// let x = 5;
// let result = x < 5 ? true : false;

// console.log(result)

// let haveYouFinishLunch = true;
// let haveYouFinishLunch = false;
// console.log(`I am ${haveYouFinishLunch == true ? true : false}`)

//Default Parameter

// function st(text="aaa") {
//     return "I am "+ text;
// }
// console.log(st("bb")) //I am bb
// console.log(st())  // I am aaa ( because of default parameter)


//  Function Expression 
    // Syntax
    //   let fx = function(){
    //     return "hello"       
    //   }
    //   console.log(fx())

      //    IiFE ( Immediate invoked function statement)
          // Syntax

    //   console.log((function(){
    //     return "hello"
    //   })())

    // Function Invoked in Other Function

      // for ex

    //    function ff(text) {
    //     sf(text)
    //     return text;
    //   }

    //    function sf(input) {
    //     console.log (input + ' world')
    //   }

    //   ff("hello")

    // Scope 
        // block s , function s , global s

// Hoisting
   //  let, const , fun experssion don't support Hoisting but fun statement and var do.
        