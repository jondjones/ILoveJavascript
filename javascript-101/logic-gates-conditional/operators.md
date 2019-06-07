# Operators


=== Eqaulity operator
```javascript
const temp = 31;
let isFreezing = temp === 31;
console.log('Is Freezing ' + isFreezing)
```

!== Inequality operator
```javascript
const temp = 31;
isFreezing = temp !== 31;
console.log('Is not Freezing ' + isFreezing)
```

< Less than operator
```javascript
const temp = 31;
isFreezing = temp < 31;
console.log('Is less than Freezing ' + isFreezing)
```

<= Less than or equal operator
```javascript
const temp = 31;
isFreezing = temp <= 31;
console.log('Is less than or equal to Freezing ' + isFreezing)
```

> Greater than operator
```javascript
const temp = 31;
isFreezing = temp > 31;
console.log('Is greater than Freezing ' + isFreezing)
```

>= Greater than or equal operator
```javascript
const temp = 31;
isFreezing = temp >= 31;
console.log('Is not greater than or equal to Freezing ' + isFreezing)
```

Examples

```javascript
const age = 30;
const isChild = age <= 7;
const isAdult = age > 8 && age < 65;
const isSenior = age >= 65;

console.log('isChild = ' + isChild);
console.log('isAdult = ' + isAdult);
console.log('isSenior = ' + isSenior);
```
### Resources
-   [Double Equals Vs Triple Equals](https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a)
---
[BACK](../README.md)