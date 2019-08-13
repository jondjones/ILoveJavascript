
# Misc Features 

## Strict Mode

```javascript
'use strict'
```

Strict-mode will enforce stricter JS parsing by the compiler.  You should use this to increase the odds of you not making silly mistakes.  This will cause an error in strict mode.  This line will compile OK in normal mode

```javascript
asdf = 'error';
```
You should use strict-mode to prevent accidental global variables from being created

## Try/Catch

try/catch is a way to catch errors thrown in your code so you can handle them  
throw - exposes a message you can pass  

```javascript
try {
    throw('error');
} catch (e) {
    console.log(e);
}
```

throw new Error - exposes an error event with two params name & message
```javascript
try {
    throw new Error('An error', 'message');
} catch (e) {
    console.log(e);
}
```

## Type Coercion

In Javascript it is possible to add/compare two different data-types.  When you do this you will get odd results and this should be avoided.  This displays 55

```javascript
console.log('5' + 5);
```

This displays 0

```javascript
console.log('5' - 5);
```

As you can see, type coercion can result in odd behaviors.  The additional sign concatenates the numbers together.  The minus operator subtracts two values.  When comparing values, you can use the non-strict equality operator.  However with type coercion this can lead to unexpected errors.   The code below will equal type, as the data type will be ignore and type-coercion kicks in.  This is a bad coding practice

```javascript
console.log('5' == 5);
```

Using strict equality will show false.  This is why should always use ===

```javascript
console.log('5' === 5);
```

If you want to compare different types.  It is better practice to use the typeof operator instead:

```javascript
const bool = true;
console.log('Boolean type = ', typeof bool);
```

```javascript
const int = 1;
console.log('Int type = ', typeof int);
```

```javascript
const array = [];
console.log('Array type = ', typeof array);
```

```javascript
const object = {};
console.log('Object type = ', typeof object);
```

## JSON Stringify

Serialize an object to a string
```javascript
const myObjects = {
    name: 'test',
    example: 'testone'
};

const asString = JSON.stringify(myObjects);
console.log(asString);
```
De-serialize a string to JSON
```javascript
const myObjects = {
    name: 'test',
    example: 'testone'
};

const toObject = JSON.parse(asString);
console.log(toObject);
```

## Useful Functions

-   [Bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
-   [Comma Operator()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator)
-   [Freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
-   [Locale Compare()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
-   [Includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
-   [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
-   [Random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

##  Data Structures

-   [Mutator Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods)
-   [Filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
-   [ForEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
-   [From()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
-   [Reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
-   [ReduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
-   [Reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
-   [Sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)