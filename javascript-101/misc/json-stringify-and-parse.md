# JSON Stringify

Serialize an object to a string
```javascript
const myObjects = {
    name: 'test',
    example: 'testone'
};

const asString = JSON.stringify(myObjects);
console.log(asString);
```
De-serialize a string to JSON
```javascript
const myObjects = {
    name: 'test',
    example: 'testone'
};

const toObject = JSON.parse(asString);
console.log(toObject);
```

---

:arrow_left: [BACK](../README.md)