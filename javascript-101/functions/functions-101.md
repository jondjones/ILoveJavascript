# Functions 101

Empty Function

```javascript
function SimpleFunction() {
}
SimpleFunction();
```

Basic exmaple with an input and a output
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
### Resources
-   [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
---
[BACK](../README.md)