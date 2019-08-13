# Async 101

## Promises and Callbacks

A promise is a more modern way of dealing with callbacks, using a promise will result in clean and more easy to understand code

#### Callback example

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

#### Handling a callback

```javascript
myCallback((err, data) => {
    if (err) {
        // Do sad path task
    } else {
        console.log(data);
    };
});
```

### Promises - A better approach

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

#### Calling the promise

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

#### Calling the promise

```javascript
const example = myPromiseWithParameters('print this text');
example.then((data) => {
    console.log(data);
});
```
#### Resources

-   [Async]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  
-   [Promises](https://scotch.io/tutorials/javascript-promises-for-dummies)


#### Uses nodes XHR2 - in a webpage you just use XMLHttpRequest() without importing a library

```javascript
var XMLHttpRequest = require("xhr2");
const basicExample = new XMLHttpRequest();

basicExample.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText)
        data.forEach((element) => {
            console.log(element.name);
        });
    }
});
```

#### Checking response correct

```javascript
const checkingStatusExample = new XMLHttpRequest();
checkingStatusExample.addEventListener('readystatechange', (e) => {

    // readytate return the state of an xml http request
    // 0 = OPENE
    // 2 = HEADERS_RECEIVED
    // 3 = LOADING
    // 4 = DONE	- This is the one we want to call to do something meaningful withthe returned data
    if (e.target.readyState === 4 && e.target.status === 200) {
        console.log('success');
    }
    
    // To check for a For a failed request, you still need to check for 4, minus the staus check
    // If you do not do this the code will return for all state changes, open , loading, header received
    else if (e.target.readyState === 4) {
        console.log('failed');        
    };
});
```

#### Calling the API

```javascript
const apiURL = 'https://restcountries.eu/rest/v2/name/united';
basicExample.open('GET', apiURL);
basicExample.send();

checkingStatusExample.open('GET', apiURL);
checkingStatusExample.send();
```
#### Resources

-   [Async]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  


## Await

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
#### Resources

-   [Async]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  

## Callbacks

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

#### Resources

-   [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  

## Fetch

Fetch is a feature that comes with es6.  If you run this script with node then you will need to import isomorphic-fetch to get this to work.  If you are running this within a browser you do no need to include it

```javascript
var fetch = require("isomorphic-fetch");
var XMLHttpRequest = require("xhr2");

const apiURL = 'https://restcountries.eu/rest/v2/name/united';

fetch(apiURL, {}) {
    .then((response) => {
        console.log(response);
    })
    .catch((e) => {
        console.log(e);
    });
}
```

Fetch is better than doing it the old way like

```javascript
const xmlRequest = new XMLHttpRequest();
xmlRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4) {
        console.log('Data');
    }
});

xmlRequest.open('GET', apiURL);
xmlRequest.send();
```
#### Resources

-   [Async]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  

## Promise Chaining

If you want to chain your callbacks ( like a recursive function call.  Using callback things are ahrd to follow and hard to maintain, this is called callback hell

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

If this was to become more complex, the code will get harder and harder to run.  Promsise chaining fixes this
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
This snippet of code is much easier to read, modify and maintain.  Chaining promise allows us to create complicated sync code, simple!

#### Resources

-   [Async]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  
-   [Promises](https://scotch.io/tutorials/javascript-promises-for-dummies)