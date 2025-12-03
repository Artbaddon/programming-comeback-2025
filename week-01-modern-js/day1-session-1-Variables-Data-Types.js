/**
 * Session: [Topic Name]
 * Date: [Date]
 * 
 * PLAYGROUND / NOTES
 * Use this space to experiment with concepts during the learning phase.
 */

let varr = "helo"




// ==========================================
// Exercise 1
// ==========================================
// Goal: 1. Swap two variables without using a temporary variable (or with one).

// Your Solution:
let word1 = "PEPE";
let word2 = "POPO";
let temp;
temp = word1;
word1 = word2;
word1 = temp;

// ==========================================
// Exercise 2
// ==========================================
// Goal:   2. Create a `const` object and modify one of its properties (prove `const` isn't immutable).

// Your Solution:

const user = { name: "pepe" };
console.log(user.name);
user.name = "pepe2"
console.log(user.name);
// ==========================================
// Exercise 3
// ==========================================
// Goal:   3. Use template literals to log a formatted user profile string (e.g., "Name: X, Age: Y").n]v

// Your Solution:
const name = "Name";
const age = 20;

const text = `Name: ${name}, Age: ${age}`


//
// Working with variables
// importance: 2
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
// solution
let name1;
let admin;

name1 = "Jhon";
admin = name1;
alert(admin)


// Giving the right name
// importance: 3
// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?
// solution
let ourPlanetName = "EARTH";
let currentUserName = "user"


