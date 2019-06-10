# Objects 101

Object Oritened Design is a very established design prinicple.  Objects can be used to lump associated proeprties of a concept togther to allow flexible designs

Basic empty object
```javascript
const myObject = {};

// Objects with basic properties
const myObjectWithProps = {
    firstName: 'jon',
    surname: 'jones'
};
```

Using an object
```javascript
console.log(`${myObjectWithProps.firstName} ${myObjectWithProps.surname}`);
```

Updating a property in an object
```javascript
myObjectWithProps.firstName = 'change';
console.log(`Changed Value=${myObjectWithProps.firstName}`);
```
### Resources
-   [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
-   [Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

---

:arrow_left: [BACK](../README.md)