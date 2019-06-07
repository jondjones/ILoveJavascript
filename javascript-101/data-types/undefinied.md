# Undefinied

Javascript assigns undefinied when no value is exlicitly set
```javascript
let implict;
console.log(implict);
```

You can explicitly assign undefinied.  Explicity setting undefined isn't recommended, as it hides the intention of the code.  If you want to explicty set soemthign as empty, use null

```javascript
const explicit = undefined;
console.log(explicit);
```

Undefinied functions

```javascript
let myFunction = function (paramter) {

    // When no parameter is passed in, this will throw undefinied
    console.log(paramter);
}
const result = myFunction();
```

When no return value is provided, undefinied will be thrown

```javascript
console.log(result);
```

Examples

```javascript
if (implict === undefined) {
    console.log('implict is undeinifed');
}
```
### Resources
-   [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
-   [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
---
[BACK](../README.md)