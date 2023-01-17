// // // function stargen(count, element) {
// // //    let star = "";
// // //    for (let i= 1 ; i <= count ; i++){
// // //       star += element;
      
// // //    }
// // //    return star 
// // // }
// // // for (let i = 1; i <= 6; i++){
// // //    if (i%2 === 0){
// // //    console.log(stargen(i ,'* '))
// // //    } else {
// // //    console.log(stargen(i ,'= '));
      
// // //    }
// // // }



// // // for (let i = 6 ; i >=1 ; i--) {
// // //     let star = "";
// // //     for(let x = 1 ; x <= i; x++ ){
// // //         star += "* ";
// // //     }
// // //     console.log(star)
// // // }

// // // function starGen(count ,element) {
// // //       let  star = "";
// // //         for(let x = 1; x <= count; x++){
      
// // //              for(let i = 1 ; i <= x ; i++){
// // //                star += element
// // //              }
            
// // //        } 
       
      
     
// // // }
// // // starGen(5 , "- ")
// // function starGen(count, element) {
// //    let star = "";
// // for(let i = 1; i <= count; i++){
 
// //    star += element;
// // }
// // return star 
// // }
// // function starOut (x){
// //    for (let i = 1; i <= x; i++) {
// //       console.log(starGen(i , "* "))
// // //    }
   
// // //    for (let i = x - 1; i >= 1; i--){
// // //       console.log(starGen(i , "* "))
// // //    }
// // // }

// // // starOut(10)


// // function voting(count, element){
// //     let result= "";
// //    for (let i = 1; i <= count; i++){
   
// //    } for (let x = 1; x <= count; x++)
// //    {
// //       result += element;
// //    }
// //    return result
// // }

// // console.log(voting(5, "* "))



// // f

// function resultGen(count , element) {
//     for (let i = 1 ; i <= count; i++)
// {
//     let star = "";
//     for (let x = 1 ; x <= count; x++){
// //         star += x <= i ?  element : '- '
// //         console.log( star, x)
// //     }
// //     console.log(star, i)
// // }
// // }
// // resultGen ( 5, "= ")

// let fruits = [];
// fruits[fruits.length] = "apple";
// fruits[fruits.length] = "orange";
// fruits[fruits.length] = "banana";
// fruits[fruits.length] = "mango";
// fruits[fruits.length] = "coconut";

// console.log(fruits);
// for (fruit of fruits){;
//     console.log(fruit, fruits[]
//         )
// }

// let mgmg = {};
// mgmg.name = "mg mg";
// mgmg.age = 12;
// mgmg.hobby = "singing"

// console.log(mgmg)

// for (about in mgmg){
//     console.log(about , mgmg[about])
// }

function starGen(count , element){
    for (let i = 1; i <= count; i++){
        let star = "";
        for (let x = 1; x <= i; x++){
            star += element;
        }
        console.log(star, i)
    }
}
starGen(6 , "* ")
