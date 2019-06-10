# Aynsc example request

Uses nodes xhr2 - in a webpage you just use XMLHttpRequest() without importing a library
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

Checking response correct

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

Calling the API

```javascript
const apiURL = 'https://restcountries.eu/rest/v2/name/united';
basicExample.open('GET', apiURL);
basicExample.send();

checkingStatusExample.open('GET', apiURL);
checkingStatusExample.send();
```
### Resources
-   [Async]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  

---

:arrow_left: [BACK](../README.md)