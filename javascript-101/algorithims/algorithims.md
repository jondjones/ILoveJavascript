## Random Number
This code generates a random number
```javascript
const min = 0;
const max = 100;

const random = Math.random() * (max - min) + min;
console.log(random);
```

## Temperature Conversion
This code converts fahrenheit to celsius
```javascript
const fahrenheit = 33;

console.log('Fahrenheit = ' + fahrenheit);

const celsius = (fahrenheit - 32) * 5 / 9;

console.log('Celsius = ' + Math.round(celsius * 100) / 100);

const kelvin = (fahrenheit + 459.67) *  5 / 9;
console.log('Kelvin = ' + Math.round(kelvin * 100) / 100);
```

---

:arrow_left: [BACK](../README.md)