# hasOwnProperty()

Object is a reference to the global JS.  Adding to object will add a method on all objectss
Object.prototype.someNewMethod = () => 'blah';.  As we attached somemethod to the JS object class, everything else will be able to access it.  This is not something I recommend

```javascript
const different = {};
console.log(different.someNewMethod());

const object = new Object();
```

Calling __proto__ will display the global objects protoypes, so in our case someNewMethod()
```javascript
console.log('objects prototypes', object.__proto__);
```

Object does not have a protoype as it's the bae object.  Trying to view Objects protoype will be null

```javascript
console.log('objects prototype prototype will be null', object.__proto__.__proto__);
```

hasOwnProperty on the object will be false as someNewMethod is declared on the prototype
```javascript
console.log(object.hasOwnProperty('someNewMethod'));
```

hasOwnProperty on the prototype will be true as someNewMethod is declared on the prototype
```javascript
console.log(object.__proto__.hasOwnProperty('someNewMethod'));
```

```javascript
try {
    object.prototype.hasOwnProperty('someNewMethod');
} catch (e) {
    console.log('This will throw as you cant use prototype to access instance prototypes');
}
```

Custom Object
```javascript
const MyConstructorFunction = function () {
};

const person = new MyConstructorFunction();
console.log('Calling __proto__.__proto__ on a declared object will show the global js object', person.__proto__.__proto__);
console.log('Calling __proto__.__proto__.__proto__ as the global object is always base', person.__proto__.__proto__.__proto__);
```

---

:arrow_left: [BACK](../README.md)