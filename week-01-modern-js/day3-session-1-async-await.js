
// ==============================================
// SECTION 1: Async functions
// ==============================================
async function f() {
    return 1;
}

f().then(alert);
//This functions will return the promise with the value of 1 is the same as:

async function f2() {
    return Promise.resolve(1);

}


// ==============================================
// SECTION 2: Await
// ==============================================
async function example() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("DONe!"), 1000);
    })

    let result = await promise;

    alert(result)
}
// Ok here we are saying that the function example will be async meaning that can use await and will always return a promise, in this function we create a ne promise that after 1 second will resolve with a done value, then we use result and use await to say, hey, pause the next executio untill the promise is resolved, then show the alert

// ==============================================
// SECTION 3: Example Fetch
// ==============================================

async function showCharacterImageById(characterID) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${characterID}`);
    let characterInfoJson = await response.json();

    let imageUrl = characterInfoJson.image

    let img = document.createElement('img');
    img.src = imageUrl;
    img.className = "promise-character-example";
    document.body.append(img);
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return characterInfoJson
}

//This function basically took characterID argument and do  a fetch petition to the rick and morty with the character of the args, we use await because fetch is an async operation, then we create varabile called characterInfoJson and in this one we will say, hey pause all untill the response actually returns something useful, because if we use only fetch, it will resolve with just the headers so we wait untill that response actually return something useful and we format it as json, then wwe take the imageurl and create an im element with the src being the img url we took from the petition, then we show it in the body and after 3 second promise, we remove it


// ==============================================
// SECTION 3: Async Class Example
// ==============================================

class Car {
    constructor() {
        this.isRunning = 0
    }

    async start() {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.isRunning === 1) {
                    reject("The Car IS already running")
                } else {
                    this.isRunning = 1;
                    resolve("Running")
                }
            }, 3000)
        })
    }
}

let car = new Car()

async function startCar(car) {


    try {
        let startCar = await car.start();
        alert(startCar)
    } catch (err) {
        alert(err)
    }


}
startCar(car);

// ==============================================
// SECTION 4: Tasks
// ==============================================
/*
Rewrite using async/await
Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404
  */

async function loadJson(url) {
    try {
        let response = await fetch(url);
        return new Promise((resolve, reject) => {
            if (response.status == 200) {
                resolve(response.json());
            } else {
                reject(response.status)
            }
        })
    } catch (err) {
        alert(err)
    }

}

/*
Rewrite "rethrow" with async/await
Below you can find the “rethrow” example. Rewrite it using async/await instead of .then/catch.

And get rid of the recursion in favour of a loop in demoGithubUser: with async/await that becomes easy to do.

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
}

// Ask for a user name until github returns a valid user
function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();
*/

//My solution
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {

        throw new HttpError(response);
    }

}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
    while (true) {
        let name = prompt("Enter a name?", "iliakan");
        try {
            let userResponse = await loadJson(`https://api.github.com/users/${name}`)
            alert(userResponse.name)
            return userResponse;
        } catch (err) {

            if (err instanceof HttpError && err.response.status == 404) {
                alert("No such user, please reenter.");
            } else {
                throw err;
            }
        }

    }
}
/*
Call async from non-async
We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
}
P.S. The task is technically very simple, but the question is quite common for developers new to async/await.
*/
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return 10;
}

function f() {
    wait()
        .then((result) => alert(result))
}
f();

