/**
 * Session: Arrow Functions
 * Date: Dec 3
 * 
 * PLAYGROUND / NOTES
 * Use this space to experiment with concepts during the learning phase.
 */

// Standard function

/**
function sayHello(name) {
    return "Hello " + name;
}

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);
 */
// Try converting these to arrow functions below:
// ...
let sayHello = (name) => "hello" + name
//IN this case we declare the variable sayHello and assign the arrow function that takes name as the arg and return the string "Hello" + name
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no()
}
//IN this function we declare the variable ask and we assign an arrow function that takes qeustion, yes and no as args and if tthe question is confirmed, it returns the callback or function that we pass as yes, and in the contrary in passes the no function.

ask("do you agree?", () => alert("You agreed."), () => alert("You cancelled the execution."))
//we use the function ask, pass do yuo agree as the question arg, then the arrow function for the yes and no functions as a callback that will execute whenever is the condition

// ==========================================
// Exercise 1
// ==========================================
// Goal: Convert a standard function declaration to an arrow function.
function greet(name) {
    return "Hello person: " + name
}
// Your Solution:


// ==========================================
// Exercise 2
// ==========================================
// Goal: Create an arrow function that implicitly returns an object (hint: wrap in parentheses).

// Your Solution:
let run = () => ({ state: "Running" });

// ==========================================
// Exercise 3
// ==========================================
// Goal: Write a one-line arrow function that takes two numbers and returns their product.

// Your Solution:
let mult = (number1, number2) => number1 * number2;
