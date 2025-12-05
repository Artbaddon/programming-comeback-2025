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


