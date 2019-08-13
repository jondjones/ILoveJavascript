
# Logic Gates And Conditional Statements

## IF & ELSE

IF/ELSE Statement
```javascript
if (true) {
    console.log('true');
} else {
    console.log('false'); 
}
```

IF/ELSE IF/ELSE Statement

```javascript
if (true) {
    console.log('true');
} else if (false) {
    console.log('false'); 
} else {
    console.log('NOt Possible');    
}
```

Examples
```javascript
const temp = 12;
if (temp <= 32) {
    console.log('Its freezing');  
}
```

```javascript
const age = 45;
if (age <= 7) {
    console.log('Is Child');  
} else if (age >= 65) {
    console.log('Is Senior');  
} else {
    console.log('Is Adult');     
}
```

## AND, OR, NOT 

```javascript
const optionOne = true;
const optionTwo = true;

if (optionOne && optionTwo) {
    // both conditions are true
    console.log("optionOne AND optionTwo");
}

if (optionOne || optionTwo) {
    // one conditions has to be true
    console.log("optionOne OR optionTwo");
}
```

Example
```javascript
const temp = 65;
if (temp >= 60 && temp <= 90) {
    console.log("It's nice outside");
}

if (temp <= 0 || temp >= 150) {
    console.log("It's crap 'outside");
}
```
## Operators

Equality operator

```javascript
const temp = 31;
let isFreezing = temp === 31;
console.log('Is Freezing ' + isFreezing)
```

!== Inequality operator
```javascript
const temp = 31;
isFreezing = temp !== 31;
console.log('Is not Freezing ' + isFreezing)
```

< Less than operator
```javascript
const temp = 31;
isFreezing = temp < 31;
console.log('Is less than Freezing ' + isFreezing)
```

<= Less than or equal operator
```javascript
const temp = 31;
isFreezing = temp <= 31;
console.log('Is less than or equal to Freezing ' + isFreezing)
```

> Greater than operator
```javascript
const temp = 31;
isFreezing = temp > 31;
console.log('Is greater than Freezing ' + isFreezing)
```

>= Greater than or equal operator
```javascript
const temp = 31;
isFreezing = temp >= 31;
console.log('Is not greater than or equal to Freezing ' + isFreezing)
```

Examples

```javascript
const age = 30;
const isChild = age <= 7;
const isAdult = age > 8 && age < 65;
const isSenior = age >= 65;

console.log('isChild = ' + isChild);
console.log('isAdult = ' + isAdult);
console.log('isSenior = ' + isSenior);
```
#### Resources

-   [Double Equals Vs Triple Equals](https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a)

## Ternary Operator

Basic example:

```javascript
let result = (1 + 1) ? 1 : 2;
```

With logic :

```javascript
const isTrue = true;
const result = isTrue ? 0 : 1;
```
#### Resources

-   [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## Truthy & Falsey

```javascript
const products = [];
const product = products[0];

// Instead of having to explity compare values, Jaascript will try and inffer it for you 
// e.g. comparrison bool example
if (product !== undefined) {
    console.log('Found');
} else {
    console.log('Undefined');
}
```

Truthy - Values that resolves to true in a boolean context   
Boolean example

```javascript
if ('truthy') {
    console.log('valid string = truthy value');
}

if ({}) {
    console.log('{} = truthy value');
}

if ([]) {
    console.log('[] = truthy value');
}

if (true) {
    console.log('true = truthy value');
}
```

Falsy - Values that resolves to false in a boolean context.  Falsy values are: false, 0, '', null or defined

```javascript
if (undefined) { } 
else {
    console.log('undefined = falsy value');
}

if ('')  { } 
else { 
    console.log('string empty = falsy value');
}

if (null) { } 
else { 
    console.log('null = falsy value');
}

if (NaN) { } 
else { 
    console.log('Nan = falsy value');
}

if (false) { } 
else { 
    console.log('false = falsy value');
}
```