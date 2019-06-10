# Prototype Declartion

```javascript
const MyConstructorFunction = function () {
};

const myObject = new MyConstructorFunction();
```

Example() does not exist on creation and throws exception

```javascript
try {
    myObject.Example();
} catch (e) {
    console.log('Example is not definied');
}

MyConstructorFunction.prototype.Example = function () {
    console.log(`Example`);
};
```

Example() now exists and the call runs... even though the object has already been created.  Declaring a prototype function/property after object declaration still get associated.  Any change made to the protoype at any time of execution will be made to everything

```javascript
myObject.Example();
```

You can define instance methods/properties to specic objects.  The method declration below, will only be avilable to this object 

```javascript
myObject.InstanceMethod = function() {
    console.log('InstanceMethod');
};
```

This will work

```javascript
myObject.InstanceMethod();

try {
    const mySecondObject = new MyConstructorFunction();
    mySecondObject.InstanceMethod();
} catch (e) {
    console.log('This will not work.  Function assocated to instance not the prototype');
}
```

Overriding prototype behaviour is also possible
```javascript
myObject.Example = function() {
    console.log(`Overriding prototype method on instance`); 
}
```

This call will now use the instance method declared aabove.  This will not use the global prototype version.  In this way you can customise classes based on your needs.

```javascript
myObject.Example();
```
### Resources
-   [Prototype](https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b)

---

:arrow_left: [BACK](../README.md)