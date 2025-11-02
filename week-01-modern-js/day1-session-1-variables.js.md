# Session 1: Variables
**Date:** 1, Nov 2025
**Time:** 6:00 - 6:50
**Duration:** 50 minutes


## Pre-Session Questions (Answer BEFORE you start)
1. What is block scope?
2. Why use const over let?

**My guesses:**
- Block scope means basically what a specific part of the code can access to
- Const is used when you know that that variable will never change, a constant value ex: Gravity

---

## Notes (Write in MY words during session)

### Variables

**What it is:**
Are named containers or boxes when you can save information

**Why it exists:**
They exist because tehy let you save data of multiple kinds into a named box, so you will be able to do operations with them

**How it works:**
If we want to save for examples some string or some text, we should do something like>

See `day1-session1-variables.js` for all examples

In low level, as far as i remember, you are setting a pointer to a new space in memory that will contain the string and you will 
have the reference to it, like i have the address of that text so if i use message i will be able to access that point in memory
**Example Code:**
See `day1-session1-variables.js` for all examples

**When to use:**
They are used everywhere, because they as i say before, let you save or have a name for something that you want to interact with in the code later, or not.

---

### The Old Var 

**What it is:**
The Var was the way that we in the past used to create variables, the var can be assigned again and js will not give us an error

**Why it exists:**
It still exists because legacy code and retrocompatibilty because there's a lot of pages that still havent migrate to newer version and old frameworks that still use that technology


**How it works:**
It works the same as the actual var, you declare that that var will have x name,

**Example:**
See `day1-session1-variables.js` for all examples

**When to use:**
The idea is to not use it, because is something legacy and only if you have to use old systems that are built it in old ES5, you should only know this for learning purpuse and to know the main difference
---

### Real life analogy

**What it is:**
if we use the analogy of the box, we can say that a variable is a box with a named sticker in it, once you create the box, you can change the content of it whenever you want, you will have to assing the variable to the value you want, when the value change, the old data is removed from the variable, like you have something inside, whenever you put another thing you empty the box and assing the new value.

You can also assing the value of 1 variable into another, in a lesser level you can say that you assign the value and create a new pointer with the same data, because in js we use primitives

**Example:**
See `day1-session1-variables.js` for all examples

### Variable naming
**What it is:**
Variable naming is basically a set of rules that tell us how to or with what keywords we can name our variables.

**Why it exists:**
To minimize errors because it doesnt let us use reserved keywords like let, const, return

**How it works:**
It has a set of rules for example: you cannot start with an alphanumeric, but you can start with $ or _, and also can use non latin letters but are not recommended and the recomended is to use camelCase for nanming them, cae matters two so if declare apple and APPLE, they will be two different variables

**Example:**
See `day1-session1-variables.js` for all examples

**When to use:**
Everytime you assing a name variable, because you will always have to name your variables
---

### Constants
**What it is:**
Are variables that cannot be reassigned, and the attempt will cause an error.

**Why it exists:**
Because in some cases you will want to have some variables that will never change, this guarantee this and comunicate this to everyone.

**How it works:**
You tell the compiler that this specific variable will always be the same, so in case something tries to change it, you return an error

**Example:**
See `day1-session1-variables.js` for all examples

**When to use:**
when you are sure some value will never change

**Extra**
There is a common practice to use cosntasnts as aliases for difficult to remeber values that we known before execution, this constanst are named using capital letters and underscores, for example the colors in hexadecimal format, this is normally used when you know the constants before the execution, because even if the constants cant change, the value of some constants is calculated during the execution.
**Example:**
See `day1-session1-variables.js` for all examples
---

### Name things right
**What it is:**
Is a serie of recomendation of how we should name our variables, because is important tat this have a ovious menaing, describing the data that it stores, this is oe of the most important and complex skills in coding.

**Why it exists:**
It exist because this can be a key difference between a beginner coder to an expert, because naming our variables in a good way let us have a more easy to read code and also maintanable.

**How it works:**
They are some rules that we should follow to have better naming:
--Use human-readable names like userName or ShoppingCart
--stay away from abbreviations or short names.
make names maximally descriptive and concise, bad names are data or value, vbcause they say nothing.

**Example:**
See `day1-session1-variables.js` for all examples

**When to use:**
Every time you name a variable

---

## Aha Moments 💡
- Undersating that block scope means that for example i have a function and that function has a variable called name, that variable will only be access in the scope of that function, meaning that i wont be able to use it outside if i dont declare it first, because the block scope is on the function only.
- Primitives are assigned by value when you copy the variable into another.

  


---

## Confusion Points ❓
- How compiler works
- How compiler deals with constants

---

## Code I Wrote

**File(s):** `[filename.js]`
**File:** `day1-session1-variables.js`
**Key techniques used:**
- 
- 

**Bugs I hit:**


---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. What is block scope?**
- Block scope means that a variable or method that you create, will only be accesible by the part of code that you are working on, meaning if you create a function with a var inside, the variable will only be accesible by that function. so if you use it outside you will not be able to use it

---

**2. Why use const over let?**
Const is used when the data of a variable is something that will not change


**3. What's one thing I still don't fully understand?**

More how blockscope works

---

## Next Session Focus
- Arrow Functions

---

## Reflection

**What went well:**
- I was able to remember important topics and i understand the topic very well

**What was hard:**
- It was hard to start studying again after that much, im kinda having an internal fight with the attention span

**Time management:**
- Did I stay focused? No
- Any distractions? Yes

**Energy level:** 5/10

**Confidence on this topic:** 8/10

---