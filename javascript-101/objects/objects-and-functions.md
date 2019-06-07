# Examples Of How to pass in and return objects into functions

Dummy Objects Set-up

```javascript
const bookOne = {
    title: '1984',
    author: 'Orwell',
    pageCount: 326
};

const bookTwo = {
    title: 'Code Complete',
    author: 'Steve McConnell',
    pageCount: 960
};
```

Example - Passing an object into a function
```javascript
const passInFunction = function(book) {
    console.log(`title=${book.title} author=${book.author} pageCount=${book.pageCount}`);
};

passInFunction(bookOne);
passInFunction(bookTwo);
console.log();
```

Example - Returning an object in a function

```javascript
const passOutFunction = function(book) {
    return bookOne;
};

const result = passOutFunction();

console.log(`title=${result.title} author=${result.author} pageCount=${result.pageCount}`);
console.log();
```

Examples
```javascript
const convertFahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    };
};

const convertRsult = convertFahrenheit(45);
console.log(`fahrenheit=${convertRsult.fahrenheit}`);
console.log(`kelvin=${convertRsult.kelvin}`);
console.log(`celsius=${convertRsult.celsius}`);
console.log();
```
### Resources
-   [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
-   [Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
---
[BACK](../README.md)