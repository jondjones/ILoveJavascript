# Isomorphic Fetch

Isomorphic Fetch

```javascript
var fetch = require("isomorphic-fetch");

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch the country')
    }
}

getCountry('GB').then((data) => {
    console.log(data.nativeName);
}).catch((e) => {
    console.log(e); 
});
```

---
[:arrow_left: BACK](../README.md)