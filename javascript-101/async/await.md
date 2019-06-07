
# Await

To make a function async..  stick the async keyword before it, when you use async it will return a promise

```javascript
const processEmptyData = async () => {
};

const returnValue = processEmptyData();
console.log(returnValue); // this will return promise ( undefinied )
```

Returning data
```javascript
const processDataAsync = async (shouldThrow) => {
    if (shouldThrow) {
        throw 'Error';
    }
    return 12;
};

processDataAsync(false).then((data) => {
    console.log(data);
});

processDataAsync(true).catch((e) => {
    console.log(e);
});
```

This uses async code as expected
```javascript
const processDataWithPromise = (num) => new Promise((resolve, reject) =>  {
    setTimeout(() => {
        resolve(num);
    }, 2000);
});
```

Async await allows you to run your code in a single threaded way the second await statement will not run until the first one has completed this prevents you from having to use then and catch chaining when you want to await

```javascript
const processDataWithAwait = async (text) => {
    let result = await processDataWithPromise(text);
    result = await processDataWithPromise(result + result);
    return result;
}

processDataWithAwait('text').then((data) => {
    console.log(data);
});
```
### Resources
-   [Async]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  
---
[BACK](../README.md)