# Promise Chaining

If you want to chain your callbacks ( like a recusive function call.  Using callback things are ahrd to follow and hard to maintain, this is called callback hell

```javascript
const getCallBack = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2);
        } else {
            callback('NUmber must be provided');
        }
    });
};
```

```javascript
getCallBack(2, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        getCallBack(data, (err, data) => {
            console.log(data);
        });
    }
});
```

If this was to become more compelx, the code will get harder and harder to run.  Promsise chaining fixes this
```javascript
const getPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
    }, 2000);
});
```

```javascript
getPromise(2).then((data) => {
    // return the promise.  This creates the promise chain
    return getPromise(data);
    })
    .then((data) => {
        // log the data
        console.log(data);
    })
    // Catch() is the methodto deal with
    .catch((e) => {
        // deal with any issues
        console.log(e);
    });
```
This snippet of code is much easier to read, modify and maintain.  Chaining promosie alows us to create complicated sync code, simple!

### Resources
-   [Async]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  
-   [Promises](https://scotch.io/tutorials/javascript-promises-for-dummies)

---

:arrow_left: [BACK](../README.md)