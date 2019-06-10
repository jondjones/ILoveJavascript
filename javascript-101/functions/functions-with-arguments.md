# Functions With Arguments

Passing multiple paramters into a function

```javascript
const multi = function(a, b) {
    return a + b;
}
console.log(multi(1, 2));
```

Null Arguments Passed in

```javascript
const noValues = function(a, b) {
    return a + b;
}

if (isNaN(noValues()) ) {
    console.log('NaN returned when no parameters provided');
}
```

Default arguments - prevents errors occuring from wrong parameters being passed into a function

```javascript
const defaultParams = function(a = 0, b = 0) {
    return a + b;
}
console.log(defaultParams());
```
### Resources
-   [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
-   [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

---

:arrow_left: [BACK](../README.md)