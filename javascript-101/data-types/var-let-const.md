
# Var, Let and const

This page will shows differences between var, let and const

Var is function scoped, not blocked scoped like let and const
```javascript
if (true)  {
    var name = 'jon';
}
console.log(name);
```

Var is function scoped
```javascript
try {
    const example = function() {
        var scoped = 'test';
    };
;
    console.log(scoped)

} catch(e) {
    console.log('This will be triggered, as var is function scoped');
}
```

Var will allow me to redifine cars, this is not a good idea and leads to consusing code\// let and const will complain
```javascript
var testThree = 'test';
var testThree = 'test';

// var delations get hosited to the top
// When this code runs it wont throw an exception
console.log(withVar);
var withVar;

// let does not get hoisted
try {
    console.log(withLet);
    let withLet ;
} catch(e) {
    console.log('This will throw as expeceted');
}
```

# Hoisting

```javascript
hosited = 10;
console.log(hosited);
var hosited ;
```
~This will console.log 10,, even though it hasn't be definied.  This is confussing~
### Resources
-   [Const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
-   [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
-   [Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

---

:arrow_left: [BACK](../README.md)