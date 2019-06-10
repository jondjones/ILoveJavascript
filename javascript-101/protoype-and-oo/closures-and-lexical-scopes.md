# Closures & Lexical Scopes

Closures and lexical scoping

```javascript
let globalContextDecalaredVariable = 2
function multiplyThis(n) {
    // Within a local function scope you have access to globally scoped variables
    let functionContextDeclaredVariable = n * globalContextDecalaredVariable
    return functionContextDeclaredVariable
};
```

Closure example, counter is created in the global context

```javascript
function createCounter() {
    let counter = 0; // counter is created in a local scoped context
    const myFunction = function() { // myFunction is locally scoped. 
        counter = counter + 1 // 
        return counter
    }
    return myFunction // local execution context ends, myFunction and counter no longer exist
};

// How you may expect it to work
const increment = createCounter(); 
```

Global scoped, contains a function definition breturned by createCounter().  It is no longer labeled myFunction, it is labeled increment within the global context

```javascript
const c1 = increment(); 

```
Create a new execution context, try to look up counter in local execution context, it does not exist.  Look for counter in global execution context, it does not exist.  Javascript will evaluate the code as counter = undefined + 1 and declare a new local variable labeled 'counter' with the number 1.  Like truthy and falsey comparisons, undefined is sort of 0, the value 1 gets returned here

```javascript
const c2 = increment(); // repeat above, 1 gets outputted

console.log('example increment', c1, c2); // this console log, outputs 1 and 2.  
```

Even though execution has ended and counter is killed, the enginge somehow still gets access to counter, is counter in global sopce, local scope?  Somehow it can still access the state of counter, how?

Whenever you declare a new function and assign it to a variable, you store the function definition and a CLOSURE.  The closure contains all the variables that are in scope at the time of creation of the function.

```javascript
function createCounterSecondTime() {
    let counter = 0; // counter is created in a local scoped context

    // myFunction is assigin to a function, so a closure is created
    // The closure (counter = 0) is included as part of the function definition
    const myFunction = function() { 
        counter = counter + 1 
        return counter;
    }
    return myFunction;  // returning the function definition and its closure()
};

const myVariable2 = createCounterSecondTime(); // This creates a closure, e.g. any vars and their state is stored within a 
backpack and returned with the function definition
```

In this example a var 'counter' is added to the backpack with a value of 0.  When myVariable2() is called its a function definition with a closure, counter = 0.  When the functin runs because of lexial scoping before it tries to find counter in the local execution context, or, global execution context.  Javascript looks in the backpack for a closure called 'counter'.  In this situation 'counter' is set to 0, the result of the function is 1.

```javascript
const closure1 = myVariable2();  // This will return 1, the backpack closure value 'counter' will now be 1
const closure2 = myVariable2(); // When this runs, the function will look in the backpack first, find the counter closure variable set to 1.  It will output 2
```

The key to remember is that when a function gets declared, it contains a function definition and a closure. The closure is a collection of all the variables in scope at the time of creation of the function.  

Private variables using closures by deafult Javascript does not provide a private keyword

```javascript
const privatePropertyExample = function() {
    let count = 0;

    return {
        increment() {
            count++;
        }, decrement() {
            count--;
        }, get() {
            return count;
        }
    }
}

const exampleOne = privatePropertyExample();
exampleOne.increment();
console.log(exampleOne.get());

// Throws undefinied as we don not have access to count
console.log(exampleOne.count);
```

---

:arrow_left: [BACK](../README.md)