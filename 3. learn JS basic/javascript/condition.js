// Conditional Statement ( if else )
 // Syntax for "if else"
     //   if (first condition) 
    //  { will run if the first condition is true } else if (second condition) { will run if the second condition is true}
    //   else { will run if the above conditions are false }
     
     
    //  function canIAttend (weakUpTime) {
    //     if (weakUpTime <= 9) {
    //         console.log("Open")
    //     } else {
    //         console.log("Close")
    //     }
    //  }
    function canIAttend (weakUpTime) {
            if (weakUpTime <= 9) {
                 return 'Open'}
            return "Close";
         
            }
     console.log(canIAttend(5))