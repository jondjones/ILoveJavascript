# type Coercion

In Javacript it is possible to add/comapre two different data-types.  When you do this you will get odd results and this should be avoided

This displays 55
```javascript
console.log('5' + 5);
```

This displays 0
```javascript
console.log('5' - 5);
```
As you can see, type coersion can result in odd behvaiours.  The additional sign concatinates the numbers togther.  The minus operator subtracgs two values.  When comapring values, you can use the non-strict equality operator.  However with type coearsion this can lead to unexpected errors.   The code below will equal type, as the data type will be ignore and type-coercion kicks in.  This is a bad coding practice

```javascript
console.log('5' == 5);
```

using strict equality will show false.  This is why should always use ===
```javascript
console.log('5' === 5);
```

If you want to compare different types.  It is better practice to use the typeof operator instead
```javascript
const bool = true;
console.log('Boolean type = ', typeof bool);
```

```javascript
const int = 1;
console.log('Int type = ', typeof int);
```

```javascript
const array = [];
console.log('Array type = ', typeof array);
```

```javascript
const object = {};
console.log('Object type = ', typeof object);
```
---
[BACK](../README.md)