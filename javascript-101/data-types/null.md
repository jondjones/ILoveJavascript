
# Null

When a variable hasn't been defined correctly, Javascript will assign it undefinied
If you want to explicity set something as not being set you should use null
Using null instead of undefinied gives other developers a better understanding of the intention of your code

```javascript
let name = null;
console.log(name);

// Example
if (name === null) {
    console.log('name is null');
}
```
### Resources
-   [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
-   [Value Type Vs Reference Type](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)

---

:arrow_left: [BACK](../README.md)