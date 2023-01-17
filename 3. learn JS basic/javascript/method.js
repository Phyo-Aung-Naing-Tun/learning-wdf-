// method and 'this' keywords
 // note for method 
  //  function inside the object is called 'method' 
    // syntax    
     //   key or property : function () { return 'hello'}
    // syntax (ES 6)
     //    key or property () { return 'hello'}

// note for 'this'
  // console.log(this) is to show window object in console.
  // let obj = { thisFun : function(){console.log(this)}} is to show parent object in console. This 'this' stand for whole object. can get value by "this.name "

  const myself = {
    name: "Phyo Aung Naing Tun",
    age: 23,
    township: "Insein",
    canTeach: function (what = "English") {
        return `I can teach ${what}.`
    },
    canLearn (anything = "anything") {
        return `I can learn ${anything}`
    },
    forthis: function () {
        console.log(this.name, this.canTeach(),this.township)
    }
  };

  console.log(myself.canTeach("Myanmar"))
  console.log(myself.canLearn())
  console.log(myself.forthis())


  