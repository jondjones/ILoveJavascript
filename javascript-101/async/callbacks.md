# Callbacks

Javascript is single treaded.  This means that when you make async requests Javascript will just plow on and process statements rather than waiting.  Running the code below will display 2 then 1.

```javascript
setTimeout(() => {
 console.log('1');
}, 1);

console.log('2');
```

Console.log will output 2 and then 1 in this order.  To prevent these issues from single thread execution from occuring.  You shoudl use callback functions, or, Promises to ensure that your code gets called when you want it to

```javascript
const callbackOne = (callback) => {
    console.log('C1');
    callback();
};

const callbackTwo = () => {
    console.log('C2');
};

setTimeout(() => {
    callbackOne(callbackTwo); }, 1);
```
This now renders the numbers in correct sequential order
### Resources
-   [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  

---

:arrow_left: [BACK](../README.md)