# Public & Private properties - More closures and lexical scoping

Private variables using closures by deafult Javascript does not provide a private keyword

```javascript
class PrivateAndPublicProperty {
    constructor(name) {
        const _count = 1  // this is private
        this.count = 2; // this is public
    };
    whatCanIAccess() {
        console.log('whatCanIAccess count = ', this.count); // this will have a value
        console.log('whatCanIAccess _count = ', this._count); // will be undefinied
    }
}
const exampleTwo = new PrivateAndPublicProperty();
```

The constructor scope is private so _count is private using this will make it public

```javascript
console.log('example two accessing _count ', exampleTwo._count);
console.log('example two accessing count ', exampleTwo.count);

exampleTwo.whatCanIAccess();
```

Private variables using closures by deafult Javascript does not provide a private keyword

```javascript
const privatePropertyExample = function() {
    let count = 0;

    return {
        increment() {
            count++;
        }, decrement() {
            count--;
        }, get() {
            return count;
        }
    }
}

const exampleOne = privatePropertyExample();
exampleOne.increment();
console.log(exampleOne.get());
```

---

:arrow_left: [BACK](../README.md)