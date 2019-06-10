# Object References

```javascript
const myAccount = {
    title: 'jon',
    expenses: 0
};

console.log('Example updating passed in variables');

const addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
    console.log('Object within function', account);
}
```

Original object gets updated.   Objects passed into function are done via pointers.  Passed in objects DO NOT get created as new objects.  Updating one, updates both.

```javascript
addExpense(myAccount, 5);
console.log('Original object', myAccount);
console.log('Passed in objects use pointers, so updating one, updates both');
console.log();
```

Example
```javascript
console.log('Re-assinging the passed in object, what gets updated?');
const accountOne = {
    title: 'jon',
    expenses: 0
};

const passInAndUpdateFunction = function(myAccount) {
    myAccount = {};
    console.log('Object within function', myAccount);
};
```

Scope still works within functions.  If you re-assign an object, the object pointer will now be udpated to pass to a new area in memory.  The orginal object data will still exist, rather than being overridden

```javascript
passInAndUpdateFunction(accountOne);
console.log('Original object', accountOne);
console.log('Reassinging the passed in object changes the pointer to a new area in memory');
console.log('Reassinging does not override the original object');
console.log();
```
Example

```javascript
console.log('Updating the returned object and comparing it to the original value, what gets updated?');
const accountTwo = {
    title: 'jon',
};

const passOutFunction = function(account) {
    account.title = 'Updated';
    return account;
};

let result = passOutFunction(accountTwo);
```

A returned object, creates a new object.  Updating the new object does now override the existing object

```javascript
console.log('Returned object re-assigned', result);
console.log('Returned object re-assigned', accountTwo);
console.log('Returned object use pointers, so both objects update');
console.log();
```

Re-assigning the returned value does not override the original object
```javascript
result = {
    title: 'new',
};

console.log('Reassinging passed out object, what happens?');
console.log('Returned object re-assigned', result);
console.log('Returned object re-assigned', accountTwo);
console.log('Reassinging does not override the original object');
console.log();
```
### Resources
-   [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
-   [Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

---

:arrow_left: [BACK](../README.md)