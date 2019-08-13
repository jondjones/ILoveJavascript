# Misc Code Samples

## Algorithm Examples

#### Random Number

This code generates a random number  

```javascript
const min = 0;
const max = 100;

const random = Math.random() * (max - min) + min;
console.log(random);
```

## Binary Tree

```javascript
BinaryTree.map = function map(mapperFn,node){
    if (node) {
        let newNode = mapperFn( node );
        newNode.parent = node.parent;
        newNode.left = node.left ?
            map( mapperFn, node.left ) : undefined;
        newNode.right = node.right ?
            map( mapperFn, node.right ): undefined;

        if (newNode.left) {
            newNode.left.parent = newNode;
        }
        if (newNode.right) {
            newNode.right.parent = newNode;
        }

        return newNode;
    }
};
```

#### Temperature Conversion

This code converts Fahrenheit to celsius  

```javascript
const fahrenheit = 33;

console.log('Fahrenheit = ' + fahrenheit);

const celsius = (fahrenheit - 32) * 5 / 9;

console.log('Celsius = ' + Math.round(celsius * 100) / 100);

const kelvin = (fahrenheit + 459.67) *  5 / 9;
console.log('Kelvin = ' + Math.round(kelvin * 100) / 100);
```

## GetCounty()

Get Countries from restcountries.eu
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
#### Resources
-   [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Get IP Loction

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
#### Resources
-   [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## AXIOS Example

Fetch data from an API

```javascript
var axios = require('axios');

axios.get('http://restcountries.eu/rest/v2/all')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
});
```

## Isomorphic Fetch

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