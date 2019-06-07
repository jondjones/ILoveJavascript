# Truthy & Falsey

```javascript
const products = [];
const product = products[0];

// Instead of having to explity compare values, Jaascript will try and inffer it for you 
// e.g. comparrison bool example
if (product !== undefined) {
    console.log('Found');
} else {
    console.log('Undefined');
}
```

Truthy - Values that resolves to true in a boolean context   
Boolean example

```javascript
if ('truthy') {
    console.log('valid string = truthy value');
}

if ({}) {
    console.log('{} = truthy value');
}

if ([]) {
    console.log('[] = truthy value');
}

if (true) {
    console.log('true = truthy value');
}
```

Falsy - Values that resolves to false in a boolean context.  Falsy values are: false, 0, '', null or definied

```javascript
if (undefined) { } 
else {
    console.log('undefined = falsy value');
}

if ('')  { } 
else { 
    console.log('string empty = falsy value');
}

if (null) { } 
else { 
    console.log('null = falsy value');
}

if (NaN) { } 
else { 
    console.log('Nan = falsy value');
}

if (false) { } 
else { 
    console.log('false = falsy value');
}
```
---
[BACK](../README.md)