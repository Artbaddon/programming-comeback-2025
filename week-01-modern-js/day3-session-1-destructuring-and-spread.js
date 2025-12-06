//   1. Destructure `address` from a `user` object, assigning a default value if it's missing.

let user = {
    name: "John",
    years: 30,
    address: "cl1"
};
let { address = "add1" } = user
//   2. Swap two variables using array destructuring syntax.

let var1 = 'Hallo1';
let var2 = "Hello2";
[var2, var1] = [var1, var2];


// 1. Swap values
let a1 = 5;
let b1 = 10;
// // do the swap with destructuring
[a1, b1] = [b1, a1]


// 2. Extract items from array
const arr = ["red", "green", "blue"];
// // get first and third into variables r and b
let [r, , b] = arr
// 3. Default values
const user2 = { name: "Ana" };
// // extract name and age, but age should default to 18
// Fix: Use {} for objects, not []
let { name, age = "18" } = user2;


// 4. Nested object destructuring
const data = {
    user: { id: 1, username: "art" },
    settings: { theme: "dark" }
};
// // extract username and theme
// Fix: Destructure directly from the object properties
let { user: { username }, settings: { theme } } = data;
// 5. Function parameter destructuring
function printUser(info) {
    let { name, city } = info
    //   // destructure name and city from info
    console.log(name, city)
}
printUser({ name: "Luis", city: "Bogotá" });