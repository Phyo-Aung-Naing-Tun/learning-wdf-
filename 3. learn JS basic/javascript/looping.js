// looping 
//တူညီတဲ့ အလုပ်တွေ ကိုသတ်မှတ် ထားတဲံ့ condition မှန်သလောက် ထပ်ခါထပ်ခါ လုပ်တယ်.
  // for loop 
     // for(1condition, 2 condition, 3 condition){
      // code block to be excuded.  
    // }  

//    for(let i=1; i< 5 ; i++) {
//          console.log(i)
//     }

//


const mgmgInfo = {
    name : 'mg mg',
    age : 18,
    marks : [ 
        {
            id : 1,
            subject : 'myanmar',
            mark  : 67
        },
        {
            id : 2,
            subject : 'english',
            mark  : 60
        },
        {
            id : 3,
            subject : 'math',
            mark  : 62
        },
        {
            id : 4,
            subject : 'phy',
            mark  : 30
        },
        {
            id : 5,
            subject : 'bio',
            mark  : 50
        }
    ],
};
// adding total key in the mgmgInfo Object
mgmgInfo.total = 0;
mgmgInfo.result = {};
for (let i = 0; i < mgmgInfo.marks.length ; i ++) {
// checking pass of fill.
mgmgInfo.marks[i].result = mgmgInfo.marks[i].mark >= 40 ? "pass" : "fill";

if (mgmgInfo.marks[i].mark >= 40) {
   mgmgInfo.result[mgmgInfo.marks[i].subject] = "Pass";

} else {
    mgmgInfo.result[mgmgInfo.marks[i].subject] = "Fill";
}

// adding total key in the mgmgInfo Object
 mgmgInfo.total += mgmgInfo.marks[i].mark;
 console.log(mgmgInfo.marks[i].mark);

}

console.log(mgmgInfo)