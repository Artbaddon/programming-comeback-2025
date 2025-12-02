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