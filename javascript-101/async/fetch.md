# Fetch

Fetch is a feature that comes with es6.  If you run this script with node then you will need to import isomorphic-fetch to get this to work.  If you are running this withi a browser you do no need to include it

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
### Resources
-   [Async]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
-   [Async/Await](https://javascript.info/async-await)  

---

:arrow_left: [BACK](../README.md)