
# Functions 101

Empty Function

```javascript
function SimpleFunction() {
}
SimpleFunction();
```

Basic example with an input and a output

```javascript
function MyFunction(input) {
    console.log(input);

    const output = 'Output';
    return output;
}

MyFunction('Input');
console.log(MyFunction('Input'));
```

Assign a function to a variable

```javascript
const square = function (x) {
    return x * x;
}
console.log(square(3));
```
#### Resources

-   [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

## Functions Scope

Example of how scope works with functions

```javascript
const convertToFahenheitToVelsuis = function(fahenheit) {
    let celsius = (fahenheit - 32) * 5 / 9;

    if (celsius <= 0) {
        const isFreezing = true;
    }

    try {

        // This will throw an exception
        // Scope within functions work the same as in conditional statements
        console.log(isFreezing);
    } catch(e) {}

    return celsius;
};

try {

    // Functions create local scope
    // Variables created within that scope are bound inside it and are not globally accessable
    // This will thrown an exception
    console.log(celsius); 
} catch(e) {}

const result = convertToFahenheitToVelsuis(32);
console.log(`result=${result}`);
```
#### Resources
-   [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

## Functions With Arguments

Passing multiple parameters into a function

```javascript
const multi = function(a, b) {
    return a + b;
}
console.log(multi(1, 2));
```

Null Arguments Passed in

```javascript
const noValues = function(a, b) {
    return a + b;
}

if (isNaN(noValues()) ) {
    console.log('NaN returned when no parameters provided');
}
```

Default arguments - prevents errors occuring from wrong parameters being passed into a function

```javascript
const defaultParams = function(a = 0, b = 0) {
    return a + b;
}
console.log(defaultParams());
```
#### Resources

-   [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## Arrow Functions

(todo)

#### Resources
-   [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)   
