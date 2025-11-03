
// ==============================================
// SECTION 1: Add/remove array methods
// ==============================================

//Syntax

// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

//Example: 
let movies = ["The god father", "Rebecca", "Spellbound"];

movies.push("Brief encounter");
//We add the values to the end in the array, to the end, it works with multiple values
console.log(movies);

movies.pop();
//With pop we delete the last value of the array

console.log(movies);
movies.shift();
//With shift we remove the first item of the array
console.log(movies);

movies.unshift("Children of paradise");
//Unshifts add an the items to the beginning of the array , it works with multiple values
console.log(movies);


// ==============================================
// SECTION 2: Splice method
// ==============================================
//Syntaxis: arr.splice(start[, deleteCount, elem1, ..., elemN])
//It modifies the array starting from start, removes deleteCount elemnts and then inserts ellents at ther place, returns the array of removed elements.

let videogamesList = ["Halo", "Minecraft", "Raft", "Dragon quest 1", "GTA SA"];
//Deletions
videogamesList.splice(1, 1)
//Starting from index 1, remove 1 item
console.log(`Starting from index 1, remove 1 item: ${videogamesList}`);

//Delete 3 and add 2 more
let removedElements = videogamesList.splice(1, 3, "OSU", "Yakuza 0");
//Here we are saying, from 1 position, delete 3 and add 2 more after that position
console.log(`Delete 3 and add 2 more ${videogamesList}`);
//Adding to the arr:
videogamesList.splice(0, 0, "League of legends");
console.log(`Adding to the arr: ${videogamesList}`)

//splice returns the removed items:
console.log(`Removed items: ${removedElements}`);

//Negative indexes are allowed:
videogamesList.splice(-1, 1)
//Go the the last position, and remove 1 item
console.log(`Go the the last position, and remove 1 item ${videogamesList}`);
// ==============================================
// SECTION 3: Slice method
// ==============================================
let mangaList = ["Berserk", "One piece", "Dorohedoro", "Astroboy", "Ashita no Joe"];
console.log(mangaList.slice(0, 3));
//We take our list and say, make a copy of the first 3 elements, the last index is not included

// ==============================================
// SECTION 4: Concat
// ==============================================
let bookList = ["The Bible", "The epic of gilgamesh", "The Illiad", "The Odyssey"]

let newList = bookList.concat("The republic");
//We take a list and create a new one with the new value, it an be an array to
console.log(newList);

let newerList = newList.concat(["The Complete Works Of Plato", "Meditations"]);
//We take a list an concat an array
console.log(newerList);