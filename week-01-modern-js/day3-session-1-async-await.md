# Session 1: Async
**Date:** Nov 3, 2025
**Time:** 11:25 - 12:30
**Duration:** 65 minutes
---

## Pre-Session Questions (Answer BEFORE you start)
1. What is Async?
2. Why we use Async?
3. When to use Async?

**My guesses:**
- Async are all of the functions that will take more time to complete, so we use async to say well this functions will be async so it will return a promise, so dont stop the execution of all but save this and executed when is finished
- We use it because ther are some functions that will take time and we dont want to be executed right away,
- They are used when you for example have a network call or calls to files in your system, it uses promises
---

## Notes

### Async

**What it is:**
Async:
Async are a keyword that is placed before a function that means that this function will always return a promise, an the values of this one will be wrapped in a resolved promise automatically
Await:
Is a keyword that only works inside async functions, this basically tell js to wait untill that promise is resolved and returns his result and then resume the execution
**Why it exists:**
Async:
It exists as a way to handle promises in a more comfortable way

Await:
To tell js that pause all the execution untill the promise is resolved and returns the value

**How it works:**
Async:
You put the keyword async before a function, and the values of that function will be wrapped in a resolve promise, it will always return a promise

Await:
This only works inside promises is a keyword that you use whenever you want to do something with the promise, is like a then but easier to ride and write
**Example:**
ee `day3-session1-async-await.js` for all examples


**When to use:**
When you want to make asyncrous operations and with a more visual and readable syntaxis

**Extra:**
Async Class methods:
You can declare async class methods by prepend the keyword async, it works the same as the async functions.

Error handling:
If a promise resolves nromally tawait promise returns the result but in case of a rejection it rhows an error, like if it was an throw new erro statemnt in that line, in real situations the promise can take some time before reject so it will be a dealy before await trhos an error, we can ctach the erro using try.. ctach, the same way as a regular throw



---



## Aha Moments 💡
- Async functions will always return promises
- await is used only in async functions and is like a then

---

## Confusion Points ❓
- Thenables
- Good async/await practices

---

## Code I Wrote

**File(s):** `day3-session-1-async-await.js`

**What I built:**
- examples of async functions and a custom example do it based on an example but with another API

**Key techniques used:**
- Fetch info from an API
- Json formatting
- A little bit of DOM 

**Bugs I hit:**
- i was using fetch without await
- Just looking at every line one by one and thinking why

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. What is Async?**
is a keyword to say that a function will return a promise

---

**2. Why we use Async?**

When we want to handle asyncronous operations in a more elegant way

---

**3. When to use Async?**

When you are using promises, when a function does something that is not completed right away
---

**4. What's one thing I still don't fully understand?**

Thenables and the utility of them

---

## Next Session Focus
- Array methods
- [Any follow-up from today's confusion]

---

## Reflection

**What went well:**
- I understood how the async await works and how to use it in a simple example

**What was hard:**
- To understand the concept but after i already know how to use Promises, then it was easy

**Time management:**
- Did I stay focused? YEs
- Any distractions? No

**Energy level:** 7/10

**Confidence on this topic:** 7/10

---