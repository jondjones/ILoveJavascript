# JavascriptDictionary


*Dyadic function* A function with two arguments
```javascript
function(one, two) {};
```

*Idempotent* You can call a function repeatedly the same way and it will always produce the same result.

```javascript
const myFunction => 1 + 1;
```

*Immediately Invoked Function Expression* Usually simplified to IIFE, pronounced iffy.

```javascript
(function() {
    alert("IIFE");
}());
```

*Isomorphic Application* Building an application that looks the same on the server and the client

*Monadic function* A function with one argument
```javascript
function(one) {};
```

*Pointfree style/Tacit Programming* Point refers to a function parameter.  Pointfree refers to not naming those parameters. 

```javascript
// not pointfree because we mention myParam in the code
const example = myParam => myParam.toLowerCase();

// pointfree
const example = compose(myParam, toLowerCase);
```

*Pure Functions* A function where the return value is only determined by its input values.  Having a function that does not add any side effects is desirable, as it reduces the chance of bugs being introduced.  Pure functions are also a lot easier ot test. 

```javascript
const result = x => x * 2;
```

---
[:arrow_left: BACK](../README.md)