
//Variables:

//Example 1  
let message = "Hello"
//Here we are saying ok save the text and name it message so if i use message in other things, i will be able to see the text


//Example 2 
let user = 'John', age = 25, message2 = "Hello";
//JavasScript let us assing multiple variables in just one line, but this is not recommended because it can affect the readability

//The old var:
var user2 = "Victor";

//Renaming 
let variable1 = "Hello";
//Here we say that variable1 will have the value of "Hello"

console.log(variable1);
//With console.log we show the actual value

variable1 = "Bye!"
//then we reassing another value to the variable

console.log(variable1);
//And we show the new value, The old one was deleted so you cannot access it anymore

//Assigning the value of 1
let var1 = "Hallo";
let var2 = var1;

//Example of naming variables

let camelCaseText = "H";

let $a = "Text with $";

let _underscore = "Text with _"

//CONSTANTS

const terra = "Terra";
//Upper named constants

const COLOR_WHITE = "#FFFF"


//Variable naming
let currentUser = "lorem12";
let paymentDate = "12.02.24"

//TASKS
/* 1
    Working with variables:
    importance: 2
    Declare two variables: admin and name.
    Assign the value "John" to name.
    Copy the value from name to admin.
    Show the value of admin using alert (must output “John”).
*/
let admin;
let name = "John"

admin = name;

alert(admin);

/* 2:
    Giving the right name
    importance: 3
    Create a variable with the name of our planet. How would you name such a variable?
    Create a variable to store the name of a current visitor to a website. How would you name   that variable?
*/
const PLANET_EARTH = "EARTH";
let currentuserName= "Nate";