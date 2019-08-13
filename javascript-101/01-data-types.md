
# Data Types

This section will cover code samples for all the primitives that are available within Javascript.

## Var, Let and Const

This sections will shows differences between var, let and const.  var is function scoped, not blocked scoped like let and const

```javascript
if (true)  {
    var name = 'jon';
}
console.log(name);
```

#### var is function scoped

```javascript
try {
    const example = function() {
        var scoped = 'test';
    };
;
    console.log(scoped)

} catch(e) {
    console.log('This will be triggered, as var is function scoped');
}
```

#### var will allow me to redefine cars, this is not a good idea and leads to confusing-code

```javascript
var testThree = 'test';
var testThree = 'test';

// var delations get hosited to the top
// When this code runs it wont throw an exception
console.log(withVar);
var withVar;

// let does not get hoisted
try {
    console.log(withLet);
    let withLet ;
} catch(e) {
    console.log('This will throw as expeceted');
}
```

## Strings

```javascript
const name = 'jon   ';
console.log('Original String = ' + name);
console.log();
console.log('Length = ' + name.length);
console.log('Uppercase = ' + name.toUpperCase());
console.log('Lowercase = ' + name.toLowerCase());
console.log('Include(\'jon\') = ' + name.includes(name));
console.log('Finding a String using indexOf(\'on\') = ' + name.indexOf("on"));
console.log('Searching a String using search(\'jon\') = ' + name.search("jon"));
console.log('Slicing first character = ',name.slice(0, 1));
console.log('Sibstring = ', name.substring(1, 3));
console.log('Replace = ', name.replace('on', 'this part has been replaced'));
console.log('Trim = ', name.trim());
console.log('Concat = ', name.concat(name));
console.log('CharAt(2) = ', name.charAt(2));
console.log('Char[0] = ', name[0]);
console.log('Split(o) = ', name.split('o'));
console.log();
```

## Template Strings/String Interpolation 

If you need to combine string your code will be easier to read when you use template strings

Template string

```javascript
console.log(`city=${city} country=${country}`);
```

Manually concatenating strings

```javascript
console.log('city=' + city + ' country=' + country);
```

#### Resources

-   [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
-   [Value Type Vs Reference Type](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)

## Booleans

#### True

```javascript
const imTrue = true;
console.log(imTrue);
```

#### False

```javascript
const imFalse = false;
console.log(imFalse);
```
#### Resources

-   [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
-   [Value Type Vs Reference Type](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)

## Dates

```javascript
const now = new Date();
const year = now.getFullYear();
console.log(year);
```

```javascript
const now = new Date();
const month = now.getMonth();
console.log(month);
```

```javascript
const now = new Date();
const dayofMonth = now.getDate();
console.log(dayofMonth);
```

```javascript
const now = new Date();
const hour = now.getHours();
console.log(hour);
```

```javascript
const now = new Date();
const minute = now.getMinutes();
console.log(minute);
```

```javascript
const now = new Date();
const second = now.getSeconds();
console.log(second);
```

```javascript
const now = new Date();
const timestamp = now.getTime();
const readDataFromString = new Date(timestamp);
console.log(readDataFromString.getFullYear());
```
#### Resources
-   [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
-   [Value Type Vs Reference Type](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)

## Undefined

Javascript assigns undefined when no value is explicitly set
```javascript
let implict;
console.log(implict);
```

You can explicitly assign undefined.  Explicitly setting undefined isn't recommended, as it hides the intention of the code.  If you want to explicitly set something as empty, use null

```javascript
const explicit = undefined;
console.log(explicit);
```

Undefined functions

```javascript
let myFunction = function (paramter) {

    // When no parameter is passed in, this will throw undefinied
    console.log(paramter);
}
const result = myFunction();
```

When no return value is provided, undefined will be thrown

```javascript
console.log(result);
```

Examples

```javascript
if (implict === undefined) {
    console.log('implict is undeinifed');
}
```
#### Resources

-   [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
-   [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

## Null

When a variable hasn't been defined correctly, Javascript will assign it undefined
If you want to explicitly set something as not being set you should use null
Using null instead of undefined gives other developers a better understanding of the intention of your code

```javascript
let name = null;
console.log(name);

// Example
if (name === null) {
    console.log('name is null');
}
```
#### Resources
-   [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
-   [Value Type Vs Reference Type](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)

## Numbers

```javascript
const number = 12343.343;

console.log('ToFixed() / round decimal place', number.toFixed(2));
console.log('Math.round()', Math.round(number));
console.log('Math.floor()', Math.floor(number));
console.log('Math.ceil()', Math.ceil(number));
console.log('Math.random()', Math.random() * (100 - 0) + 0);
```

```javascript
const age = 12;
const dogYear = (age + 1) / 7;

console.log(dogYear);
```

```javascript
const numberOfQuestions = 1;
const numberOfCorrectResults = 3;
const percentage = (numberOfQuestions *  100) / numberOfCorrectResults;

console.log(percentage);
```
#### Resources

-   [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
-   [Random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
-   [Value Type Vs Reference Type](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)