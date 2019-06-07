# Functions Scope

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
### Resources
-   [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
---
[BACK](../README.md)