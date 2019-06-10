# Protoype Inheritance 101

Constructor function need to use a regular function, instead of an arrow function arrow functions do not bind this

```javascript
const MyConstructorFunction = function (someText) {
    this.someText = someText;
    this.myArray = ['one', 'two'];
};
```

Attaching a method to a constructpr function.  Attaching methods is done using protoype inheritance.  You can attach thigns to the prototype and then access them using 'this'

```javascript
MyConstructorFunction.prototype.getText = function () {
    return `Using prototype and this, I can access the functions properties = ${this.someText}`;
};
```

Defining global static  text

```javascript
MyConstructorFunction.prototype.globalText = 'Global Text';
```

You can override base properties

```javascript
MyConstructorFunction.prototype.overrideBaseProperties = function(moreText) {
    this.someText = moreText;
};
```

You should use arrow functions to iterate through items in an arrary arrow functions do not bind this and will use the correct inheritance scope.  Create a new function, using function will rebind 'this' and stop you getting access to the prototype properties

```javascript
MyConstructorFunction.prototype.scopeBindingExample = function(moreText) {

    try {
        this.myArray.forEach(function(item) {
            console.log(`prototype property someText = ${this.someText} when decalred in normal function`);
        });
    } catch (e) {
        console.log('Exception thrown when accessing someText, a normal function definition rebinds \'this\', so access to prototype is lost')
    }

    this.myArray.forEach( (item) => {
        console.log(`someText =  ${this.someText} and is available because the array was iterated using an arrow function.  Prototype scope is not rebound so 'this' still points to prototype`);
    });
};
```

Invalid way to call a constructor function results in undefinied as the new keyword was ommited

```javascript
try {
    const myFunction = MyConstructorFunction();
console.log(myFunction);
} catch(e) {}
```

Correct way to call a constructor function need to use 'new' keyword.  Functions that you want to be objects should start with an uppercase letter

```javascript
const myObject = new MyConstructorFunction('text');
console.log(myObject.someText);
console.log(myObject.getText());
console.log(myObject.globalText);

myObject.overrideBaseProperties('new text');
console.log(myObject.getText());

console.log(myObject.scopeBindingExample());
```
### Resources
-   [Prototype](https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b)

---

:arrow_left: [BACK](../README.md)