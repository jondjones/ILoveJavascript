# Currying

Currying is an architectutal approach where you split you functions, into smaller components.  In a curried method, a function only accepts one argument and returns one function.  Using closures and currying you cycle down the chain until no all arguments have been processed

Normal

```javascript
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
```

Curried - One Level

```javascript
function curryOneAdd(a) {
      return (b) => {
        return a + b;
      }
}

console.log(curryOneAdd(1)(2));
```

Or another way of writing it

```javascript
const add10 = curryOneAdd(10);
console.log(add10(7));
```

Curried - One Level

```javascript
function curryTwoAdd(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
      }
    }
}

console.log(curryTwoAdd(1)(2)(3));
```
### Resources
-   [Curring](https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400)
---
[BACK](../README.md)