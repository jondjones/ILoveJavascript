# Classes & Subclasses

Instead of having to use constructor functions you can use class.  Using class is syntax sugar, under the hood it works exactly the same constructor functions.  Using class results in cleaner code

```javascript
class MyClass {
    constructor(argument) {
        this.argument = argument;
    };

    myMethod() {
        console.log('Hi');
    };

    myOverride() {
        console.log('MyClass');
    };
};
```

Use the keyword modifier extends to create a sub class of a class
```javascript
class MySubClass extends MyClass{
    constructor(argument) {
        super(argument); // Need to call super in sub class to call the base class constructor, otherwise exception is thrown
    };

    myOverride() {
        console.log('MySubClass');
    };

    getBaseProperty() {
        console.log(this.argument);
    };
};
```

```javascript
const myClass = new MyClass('1');
myClass.myMethod();
myClass.myOverride();

const mySubClass = new MySubClass('example text');
mySubClass.myMethod();
mySubClass.myOverride();
mySubClass.getBaseProperty();
```
### Resources
-   [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
-   [Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor)
-   [New](https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e)
-   [Prototype](https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b)
---
[BACK](../README.md)