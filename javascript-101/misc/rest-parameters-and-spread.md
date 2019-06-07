
# Rest Parameters & Spread

You can pass in dynamic variables and deal with it using ...  
If you want specifc named paramteres put them first, otherwise they will be included in the list   

```javascript
const sum = (type, ...numbers) => {
    let sum = 0;
    numbers.forEach((num) => sum += num);
    const average = sum / numbers.length;

    return `the average of ${type} is ${average}`
}

console.log(sum('thing', 1,2,3,4,5,6));
console.log(sum('thing', 100,200,300,400));
```

The spread works in an opposite way using ... when you pass in data to a function, will flatten it and pass it as a flat instance in print data we grab the first two passed in as a named value and then print it out.  This works when you use the ...

```javascript
const printData = (data, type, letterA, letterB) => {
    console.log(data);
    console.log(data);
    console.log(letterA);
    console.log(letterB);
};

const data = {
    name: 'name',
    type: 'type',
    stuff: ['a','b','c','d','e','f','g']
};

printData(data.name, data.type, ...data.stuff);
```

You can create a new array with old data easily with the spread

```javascript
const cloneOfStuff = ['1', '2', ...data.stuff];
console.log('clone', cloneOfStuff);
```


Also works with objects

```javascript
let myObject = {
    exampleOne: 2, 
    exampleTwo: 2, 
}
```

This will create a clone

```javascript
let newObject = {
    ...myObject
};

console.log(myObject);
console.log(newObject);
```

If I update myObject now, the new object will not get it
```javascript
myObject.exampleOne = 'updaed';
```

This will print the same

```javascript
console.log(newObject);

let secondObject = {
    exampleThree: 3, 
    exampleFour: 4, 
}

let combineObject = {
    ...myObject,
    ...secondObject 
};

console.log(combineObject);
```

Destructing

```javascript
const numbers = [1, 2, 3, 4, 5];
const [ first, second, ...others ] = numbers;
console.log('first', first);
console.log('second', second);
console.log('others', others);
```
---
[BACK](../README.md)