# Get & Set

You can use getters and setters to help you provide better encapsulation within your objects.  Using this appraoch means you can define private variables that only the object itself can modify.  This is a lot better than making instance variables public, as outside classes shouldn't be able to directly manipulate state within your classes

```javascript
const myObject = {

    innerProperty: 'myProperty',

    // Defining a getter
    get myProperty() {
        return this.innerProperty;
    },

    // Defining a setter
    set myProperty(value) {
        console.log(value);
        this.innerProperty = value;
    }
};

// Getting 
console.log(myObject.myProperty);
```

Setting -> will do a console.log()

```javascript
myObject.myProperty = 'setting';
console.log(myObject.myProperty);
console.log(myObject.innerProperty);
```
---
[BACK](../README.md)