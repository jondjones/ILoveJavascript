
# Promises and callbacks

A promise is a more modern way of dealing with callbacks, using a promise will result in clean and more easy to understand code

Callback example
```javascript
const myCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'callback');

        // This accidentl logic issues can occur in callbacks
        // In this example I only want the callback to return once, however, there is no way to gurantee that it gets run once
        callback(undefined, 'callback');
    }, 2000);
};
```

Handling a callback
```javascript
myCallback((err, data) => {
    if (err) {
        // Do sad path task
    } else {
        console.log(data);
    };
});
```

## Promises - A better appraoch

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise');
    }, 2000); 

    // After resolve is called, the method is finished.
    // In this code reject will never be run
    // Promises gurantee that only one happy path or one unhappypath bit of logic will be called
    setTimeout(() => {
        reject('reject promise');
        reject('this will never be called');
    }, 2000); 
});
```

Calling the promise

```javascript
myPromise.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
});
```

```javascript
const myPromiseWithParameters = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);  
    });
};
```

Calling the promise

```javascript
const example = myPromiseWithParameters('print this text');
example.then((data) => {
    console.log(data);
});
```
### Resources
-   [Async]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  
-   [Promises](https://scotch.io/tutorials/javascript-promises-for-dummies)
---
[BACK](../README.md)