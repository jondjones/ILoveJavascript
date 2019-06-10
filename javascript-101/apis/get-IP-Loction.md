# Get IP Loction

Get IP Loction
```javascript
var fetch = require("isomorphic-fetch");
const api = 'https://ipinfo.io/json?token=e4db2aebef0663';

const getLocation = async () => {
    const response = await fetch(api);
    if (response.status === 200) {
        const data = await response.json();
        return data.region;
    } else {
        throw 'some error';
    };
};

getLocation().then((data) => {
    console.log(data);
})
```
### Resources
-   [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

:arrow_left: [BACK](../README.md)