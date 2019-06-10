# Adding methods to objects

Dummy Object

```javascript
const exampleOne = {
    name: 'Appetite for Destruction',
    releaeYear: 1987,
    artist: 'Guns N Roses',
    amountInStock: 2,

    // Defining a method
    checkAvailability: function(totalItemsRequested) {

        // This method is just a function within a object
        console.log(totalItemsRequested);
        return true;
    }
};
```

Calling the method is the same as calling a property within an object.  You can pass in paramteres and get return values

```javascript
const exampleOneResult = exampleOne.checkAvailability(4);
console.log(exampleOneResult);
```

THIS

```javascript
const exampleTwo = {
    name: 'Appetite for Destruction',
    releaeYear: 1987,
    artist: 'Guns N Roses',
    amountInStock: 2,

    whatIsThis: function() {
        // the 'this' keyword is a special keyword within Javscript that helps you manage scope within your objects
        // using this' will allow you to access the objects proeprties within your methods
        console.log(this);
    }
};
exampleTwo.whatIsThis();
```

Using the 'this' keyword to access object properties within a method 

```javascript
const exampleThree = {
    name: 'Appetite for Destruction',
    releaeYear: 1987,
    artist: 'Guns N Roses',
    amountInStock: 2,

    // Defining a method
    checkAvailability: function(totalItemsRequested) {

        // Using this to access child object properties
        return this.amountInStock >= totalItemsRequested;
    }
};

console.log(exampleThree.checkAvailability(3));
```
### Resources
-   [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
-   [Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

---

:arrow_left: [BACK](../README.md)