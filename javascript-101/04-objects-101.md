# Objects 101

Objets are a way of grouping one or more related properties together

#### Basic empty object  

```javascript
const myObject = {};

// Objects with basic properties
const myObjectWithProps = {
    firstName: 'jon',
    surname: 'jones'
};
```

#### Using an object  

```javascript
console.log(`${myObjectWithProps.firstName} ${myObjectWithProps.surname}`);
```

#### Updating a property in an object  

```javascript
myObjectWithProps.firstName = 'change';
console.log(`Changed Value=${myObjectWithProps.firstName}`);
```
#### Resources

-   [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
-   [Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

## Objects And Functions

#### Dummy Objects Set-up

```javascript
const bookOne = {
    title: '1984',
    author: 'Orwell',
    pageCount: 326
};

const bookTwo = {
    title: 'Code Complete',
    author: 'Steve McConnell',
    pageCount: 960
};
```

#### Passing an object into a function
```javascript
const passInFunction = function(book) {
    console.log(`title=${book.title} author=${book.author} pageCount=${book.pageCount}`);
};

passInFunction(bookOne);
passInFunction(bookTwo);
console.log();
```

#### Returning an object in a function

```javascript
const passOutFunction = function(book) {
    return bookOne;
};

const result = passOutFunction();

console.log(`title=${result.title} author=${result.author} pageCount=${result.pageCount}`);
console.log();
```

#### Example

```javascript
const convertFahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    };
};

const convertRsult = convertFahrenheit(45);
console.log(`fahrenheit=${convertRsult.fahrenheit}`);
console.log(`kelvin=${convertRsult.kelvin}`);
console.log(`celsius=${convertRsult.celsius}`);
console.log();
```

#### Resources

-   [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
-   [Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

## Objects As Arguments

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
#### Resources

-   [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
-   [Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

## Adding To An Object

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
#### Resources

-   [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
-   [Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
