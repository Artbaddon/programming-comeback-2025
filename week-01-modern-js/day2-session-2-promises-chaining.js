
// ==============================================
// SECTION 1: Chaining promises
// ==============================================

new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000);
})
    .then((result) => {
        alert(result)
        return result * 2
    })
    .then((result) => {
        alert(result)
        return result * 2
    })
    .then((result) => {
        alert(result)
        return result * 2
    })
//Here we have a promise that after 1 second returns a 1, after that we have a then method that will show an alert and then will return result*2, the next one because then returns a new promise, will have the value of the previous one so result will be 2, then shows result and then we use another then, that does the same as the old one because then returns the promise

// ==============================================
// SECTION 2: handler returning a promise explicitly
// ==============================================

new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})
    .then((result) => {
        alert(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000)
        })
    }).then((result) => {
        alert(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000)
        })
    }).then((result) => {
        alert(result);

    })

//In this code we instace a promise that will resolve with the value of 1 after 1 second, then we use a handler, that will take the result of the initial promise and will show an alert, then it will return a new promise that after 1 second will multiply the result by 2, after that theres another handler that will wait untill the previous promise is fuullfiled and then will also return a new promise same as beofre, and the final then will just show the result in this case 4

// ==============================================
// SECTION 3: Example of an use in real life scenario
// ==============================================
//Example Load Script

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement("script");
        script.src = src
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script loading error for ${src}`));

        document.head.append(script)
    })
}

loadScript("./script1.js")
    .then((script) => loadScript("./script2.js"))
    .then((script) => loadScript("./script3.js"))
    .then((script) => {
        one();
        two();
        three();
    })

//
// ==============================================
// SECTION 4: Fetch examples
// =============================================
fetch('./article/user.json')
    //We make a petition to the url and it will return resolve even if only the headers are returned
    .then((response) => {
        //We use response.text to say that we will wait untill the whole data of the petition is completed and then we formatted as text
        return response.text()
    })
    .then((text) => {
        alert(text)
        //This will only execute whenever the response.text of the previous one is fullfilled so the alert will show the data we want from the url
    })

//THis is also made with JSON
fetch('./article/user.json')
    .then((response) => response.json())
    .then((user) => alert(user.name))