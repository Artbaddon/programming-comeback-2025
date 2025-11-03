# Session 2: Promises Chaining
**Date:** Nov 2, 2025
**Time:** 21:35 - 22:35
**Duration:** 50 minutes

---

## Pre-Session Questions (Answer BEFORE you start)
1. What are promises chaining?
2. Why we use promises chaining?
3. When to use promises chaining?
**My guesses:**
- Promises chaining are promises that you can chain to execute one after another
- We use promise chaining when we want that when a promise if fullfilled, it will execute another function in the outer scope, like using promises as callbacks
- When we want to execute a promise after another

---

## Notes 

### Promises Chaining

**What it is:**
They promise chaining is when you use various .then or methods to handle promise into the same promise, like multiple handlers for the value that the promise returns, the advantage of this is that you execute a .then, and after that another, the value of the last one will be now in the one that is executing in that moment.

Returning promises
The .then can expicitly return promises and the other handlers will wait until it settles 

**Why it exists:**
It exists because it let you chain multiple handlers to the same promise.

**How it works:**
You handle the first promise with a .then, after that if you use another .then, the value of the last one will be the value you will have because this returns a promise, that happens everytime you chain another one

**Example:**
```javascript
// Code example with comments explaining each line
```

**When to use:**
When you want to handle more than 1 time a promise and want that every next method use the same result or resolve value of the old one.

---



---



## Aha Moments 💡
- How promise chaining works, every .then method returns a promise even if not wrote explicitly
- the promise handler can also return a promise and the next handlers will wait untill the actual one is fullfilled

---

## Confusion Points ❓
- [What's still fuzzy]
- [Questions to research later]

---

## Code I Wrote

**File(s):** `[filename.js]`

**What I built:**
- Basic examples of promises chaining

**Key techniques used:**
- 
- 

**Bugs I hit:**
- [Problem you encountered]
- [How you solved it]

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. What are promises chaining?**
Promises chaining is basically a way that we can use a various handlers in the same promise 

---

**2. Why we use promises chaining?**

We use it when we want to execute handlers after a promise is fullfilled but time, meaning that we want to execute something when the promise is over, and after that other hing

---

**3. When to use promises chaining?**

When you want to use multiple handlers to the same promise

---

**4. What's one thing I still don't fully understand?**

[Honest answer]

---

## Next Session Focus
- Async


---

## Reflection

**What went well:**
- Understood chaining promises

**What was hard:**
- 

**Time management:**
- Did I stay focused? Yes
- Any distractions? No

**Energy level:** 5/10

**Confidence on this topic:** 7/10

---