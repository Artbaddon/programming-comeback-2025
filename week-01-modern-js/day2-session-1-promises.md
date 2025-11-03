# Session 1: Promises
**Date:** Nov 2, 2025
**Time:** 19:25 -21:05:
**Duration:** 80 minutes

---

## Pre-Session Questions (Answer BEFORE you start)
1. What are promises?
2. Why we use promises?
3. When to use promises?

**My guesses:**
- Promises are a type of data that will return something but not in the moment of the execution, that means that you set a promise or something that will happen and you tell js this, that they will return something but dont wait untill that happens and continue the next execution
- they are used in async operations, operations that are supossed to take a time and we dont want to pause all the execution and just continue and when that finish, it will return
-We use promises when we want to do for examples calls to an API or file operations, etc.
---

## Notes (Write in MY words during session)

### Promises

**What it is:**
-Is a type of object that represents the eventual completition of an async operation, meaning that when we know that something will take time, we say, the promise is something that it will eventually return something, good or bad, is like saying that you are waiting for an album or an annouce to be made, the idea is to bound the analogy of a singer, that will release an album and the list of fans that are waiting for that album, in js for example, we bound producing code that does something and takes time and a consuming code that wants the result of that producing code once its ready, the promise links that two concepts

**Example:**
See `day2-session1-promises.js` for all examples

**Why it exists:**
-It exist because they will be sometimes when you will use operations that take some a little bit of time for example a network call to an API

**How it works:**
-The syntax is easy, you isntance the Promise Object and pass a function that will execute whenever the promise is instanced so this function will have a resolver and reject callbacks, that will be returned depending of the result of the function itself.

**Example:**
See `day2-session2-promises.js` for all examples

**When to use:**
-They are used in network operations, file managment, things that are not completed at the time but after that

---

### Then, catch, finally

**What it is:**
Then:
-These are functions that are meaning that you will suscribe to a promise so you will execute something when the promise is fullfiled, is like saying that you are in a waiting list and when is your turn, you will do something right away

Catch:
-This work similar to then but only focuses on errors

Finally:
-This is a method that will run whenever a promise is settled resolver or reject same as finally or catch

**Example:**
See `day2-session1-promises.js` for all examples

**Why it exists:**
Then:
-It exist because promises sometimes are used in various other stuff so you can select what to do whenever that promise fullfils

Catch:
-This is used when you are only intereseted in errors, is the same as the second argument of then

Finally:
-Then main idea of finally is to septup a cleanup/finalizing afther the provious operations are complete

**How it works:**
Then:
-You take a promise and use the .then, the method that will execute and will take to callbacks whenever its an error or an resolve

Catch
-Same as then but only in errors, so you will catch the eventual error if the promise is return as rejected

Finally
-It executes whenever the promise is settled 
**Example:**
See `day2-session2-promises.js` for all examples

**When to use:**
Then:
-When you want to do something whenver the promise returns somethng
Catch:
-In try catch and whenever you want to handle the erros

Finally:
-Whenever you want to clean or do something after the other functions, for example stopping loading indicators, closing no longer needed connections, etc
---


## Aha Moments 💡
- Finally understood how promises work
- [Connection you made between concepts]

---

## Confusion Points ❓
- [What's still fuzzy]
- [Questions to research later]

---

## Code I Wrote

**File(s):** `[filename.js]`

**What I built:**
- `day1-session1-variables.js`

**Key techniques used:**
-Promises, then, finally, catch, arrow functions 
- 

**Bugs I hit:**
- [Problem you encountered]
- [How you solved it]

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. What are promises?**

-Promises are on object in js that let us manage the state of an async function, it has 3 main states, pending, reject, resolve

---

**2.  Why we use promises?**

-Becase they are some operations that will take more time so you will have to deal with them later

---

**3. When to use promises?**

-Whenever you need to do an async operation, for example file managment, network calls etc

---

**4. What's one thing I still don't fully understand?**

[Honest answer]

---

## Next Session Focus
- Promises chaining, Async
- [Any follow-up from today's confusion]

---

## Reflection

**What went well:**
- I understood the main use of promises and finally was able to us ethem

**What was hard:**
- AT the start the analogies didnt connected so 30 mins i was reading again and again and finally understood

**Time management:**
- Did I stay focused? Yes
- Any distractions? Yes

**Energy level:** 7/10

**Confidence on this topic:** 7/10

---