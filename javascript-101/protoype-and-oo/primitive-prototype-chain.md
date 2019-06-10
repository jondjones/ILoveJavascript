# Prototype Chain

int

```javascript
const int = 9;
console.log('int => ', int);
console.log(`${typeof int} =>`, int.__proto__);
console.log(`${typeof int.__proto__} =>`, int.__proto__.__proto__);
```

number

```javascript
const number = new Number(1);;
console.log('number => ', number);
console.log(`${typeof number} =>`, number.__proto__);
console.log(`${typeof number.__proto__} =>`, number.__proto__.__proto__);
```

bool
```javascript
const bool = true;
console.log('bool => ', bool);
console.log(`${typeof bool} =>`, bool.__proto__);
console.log(`${typeof bool.__proto__} =>`, bool.__proto__.__proto__);
```
string
```javascript
const stringExample = 'ji';
console.log('string => ', stringExample);
console.log(`${typeof stringExample} =>`, stringExample.__proto__);
console.log(`${typeof stringExample.__proto__} =>`, stringExample.__proto__.__proto__);
```

null
```javascript
try {
    const nullExample = null;
    console.log('null => ', nullExample);
    console.log(`${typeof nullExample} =>`, nullExample.__proto__);
} catch(e) {
    console.log('null has no prototype chain');
}
```

undefinied

```javascript
try {
    const undefinedExample = undefined;
    console.log('undefined => ', undefinedExample);
    console.log(`${typeof undefinedExample} =>`, undefinedExample.__proto__);
} catch(e) {
    console.log('undefined has no prototype chain');
}
```

array

```javascript
const array = [];
console.log('array => ', array);
console.log(`${typeof array} =>`, array.__proto__);
```

object
```javascript
const object = {};
console.log('object => ', object);
console.log(`${typeof object} =>`, object.__proto__);
```

---

:arrow_left: [BACK](../README.md)