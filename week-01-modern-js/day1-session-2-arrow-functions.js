
// ==============================================
// SECTION 1: Basic Arrow functions examples
// ==============================================

//let func = (arg, arg2, ..., argN) => expression
// here we are saying that the func will be the return value of the function, in this case the expression, this is a shorthand for:
// let func = function(arg1, arg2, ..., argN){
//     return expression;
// }

let sum = (a, b) => a + b;
//Here we take the variable sum that will be the returning value of the addition between arg a and arg b, the return is implicit
console.log(sum(1, 2))
// this will show us the sum in this case 3

let func = n => n * n;
// if theres only 1 arg, the parenthesis can be ommited, 

let func2 = () => alert("Hello");
//if they are not args, parentheses are empty, but they must be present


let printText = (text) => {
    let largerText = "Hello " + text;
    // we create the variable printText that will have the value of the return of the concatenation between the arg text and hello;
    return largerText
}
//Tasks
/*
Rewrite with arrow functions
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}
ask(
    "Do you agree?",
    () => alert("You Agreed"), () => alert('You cancelled the execution')
);

// ==============================================
// SECTION 2 Advanced Arrow functions examples
// ==============================================
//1. They dont have this
let group = {
    title: "Our Group",
    students: ["Pete", "Pet", "Pe"],

    showList() {
        this.students.forEach(
            student => alert(this.title + ": " + student)
        )
    }
    //An object that has a method and iterate the list and for each student show an alert with the name of the student and the title
}
let group2 = {
    title: "Our Group",
    students: ["Pete", "Pet", "Pe"],

    showList() {
        this.students.forEach(
            function () { alert(this.title + ": " + student) }
        )
    }
    //This function will give us an error because the this of the function is set to undefiend because thats what for each does, but with an errow function it simply doesnt have this, so it will not alter something that doesnt exist

}// ==============================================
// SECTION 3: When Arrows DON'T Work (Important!)
// ==============================================

// ❌ BAD: Arrow as object method
const person = {
  name: "Alice",
  greet: () => {
    console.log(`Hi, I'm ${this.name}`);
    // Broken! Arrow's 'this' is NOT the person object
  }
};
person.greet(); // "Hi, I'm undefined"

// ✅ GOOD: Regular function as object method
const person2 = {
  name: "Bob",
  greet: function() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
person2.greet(); // "Hi, I'm Bob"

// ✅ GOOD: Arrow inside a method (keeps outer 'this')
const person3 = {
  name: "Charlie",
  friends: ["Dave", "Eve"],
  
  greetFriends: function() {
    this.friends.forEach(friend => {
      // Arrow here is GOOD - we want 'this' to be person3
      console.log(`${this.name} says hi to ${friend}`);
    });
  }
};
person3.greetFriends();
// "Charlie says hi to Dave"
// "Charlie says hi to Eve"

// ==============================================
// RULE OF THUMB:
// ==============================================
// Use arrows: Callbacks, short functions, when you want outer 'this'
// DON'T use arrows: Object methods, constructors, when you need 'this'