
// ==============================================
// SECTION 1: Contruction of a promise
// ==============================================
let promise = new Promise(function (resolve, reject) {
    //executor (the producer code)
    //The executor will run automatically whenever we isntance the promise object and will eventually obtain a result, when that result is returned it will have to be a callback, resolve if is succesful or reject if is an error
    //This promise will have 3 states, when the executor hasnt finished, it will be pending, when the result is valid, the state is fulfilled and it will return anresolve, and when an error hapens it will be a reject or rejected state
    //It also have another property called result, is initially undefefined before the executer finish, it will be value when resolve and error when reject
})

let timedResolvePromise = new Promise(function (resolve, reject) {
    //We pass a function that will take 1 second to complete, after that it will return a resolve with the value done
    setTimeout(() => resolve("Done"), 1000)
})

let timedRejectPromise = new Promise(function (resolve, reject) {
    //We pass a function that will take 1 second to complete, after that it will return a reject
    setTimeout(() => resolve(new Error("ERRRR")), 1000)
})


// ==============================================
// SECTION 2: Then, Catch and Finally
// ==============================================
//Then Syntax:
promise.then(
    function (resolve) { },
    function (error) { }
    // Here we are saying ok suscribe to the promise and when it returns something, do something when is a resolver or other thing if there is an error
)

let isTheDay = false;
let albumIsOut = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (isTheDay) {
            return resolve("The album is out");
        }
        return reject(new Error("Is not out yet"))
    }, 1000)
    //In this function we take a boolean isTheDay, we set a timeout of 1 second, and when the time is over, it will check if the boolean is true, itwill return a resolve with a value of the album is out, and if is not, it will reject with an error
})

albumIsOut.then(result => alert(result), null)
//Here we say suscribe to the value of the promise album is out, and when is a resolve, show an alert with the text, same with the error
albumIsOut.catch(error => alert(error))

//Finally is meant to not interact with the result of the promises

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise ready")
    }, 1000);
})
    .finally(() => alert("THe promise is ready"))
    .then(result => alert(result))
//IN this promise we set a timeout that after 1 second will resolver with a message of promis ready and we use finally to show an laert saying that the promise is ready, as yyou cansee the result is passed to the finally method but it didint change anything so the .then can access after the finally is over
//More examples
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement("script");
        script.src = src
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script loading error for ${src}`));

        document.head.append(script)
    })

    /*In this function we take src as an argument, then we return a new promise, inside the promise we have a script variable that is a script elemnt, we set the src to the src of the argument of loadscript and if is loading we return a resolveve with the script, if is an error we return an erro sying that there was a loading error
    after it loads we append it to the head
    */



}
//Usaage>
let scriptLoaded = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

scriptLoaded.then(
    script => alert(`${script.src} is loaded`),
    error => alert(`Error :${error.message}`)
)
// ==============================================
// SECTION 3: Tasks
// ==============================================
/*
Delay with a promise
The built-in function setTimeout uses callbacks. Create a promise-based alternative.

The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  // your code
}

delay(3000).then(() => alert('runs after 3 seconds'));
*/

function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
delay(3000).then(() => alert("Runs after 3 seconds"))
