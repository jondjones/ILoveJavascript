
# Arrays 101

#### Example arrays with different types of data

```javascript
const emptyArray = [];
const numberArray = [ 1, 2, 3, 4 ];
const charArray = [ 'a', 'b', 'c', 'd' ];
```

#### Display array

```javascript
const notes = [ 'note1', 'note2', 'note3'];
console.log('Note array', notes);
```

#### Get the number of items in the array

```javascript
const notes = [ 'note1', 'note2', 'note3'];
console.log(`Notes length = ${notes.length}`);
```

####  Display the first item in the array

```javascript
const notes = [ 'note1', 'note2', 'note3'];
console.log(`First Item = ${notes[0]}`);
```

####  Dynamically decide what item to display in the array, using an operation to determine item place

```javascript
const notes = [ 'note1', 'note2', 'note3'];
console.log(`First Item = = ${notes[notes.length - 3]}`);
```

####  Undefined items result in an undefined state

```javascript
const notes = [ 'note1', 'note2', 'note3'];
console.log(`Undefinied Item = ${notes[100]}`);
```
#### Resources

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 

## Adding And Removing items from an array

Adding a note to end of array:    

```javascript
const notes = [ 'note1', 'note2', 'note3'];

notes.push('note 4');
console.log('Note array', notes);
```

Remove last node  

```javascript
const notes = [ 'note1', 'note2', 'note3'];

const poppedNote = notes.pop();
console.log('Note array', notes);
console.log('Popped Note', poppedNote);
```

#### Removing first node

```javascript
const notes = [ 'note1', 'note2', 'note3'];

const shiftedNote = notes.shift();
console.log('Note array after shift', notes);
console.log('Shifted Note', shiftedNote);
```

#### Adding an item to the beginning of the array - unshift

```javascript
const notes = [ 'note1', 'note2', 'note3'];

notes.unshift(shiftedNote);
console.log('Note array after unshift', notes);
```

#### Getting an item from an array without changing it

```javascript
const notes = [ 'note1', 'note2', 'note3'];

const slicedItem = notes.slice(1, 2);
console.log('Note array doesnt change after slice', notes);
console.log('Slaced() Item = ', slicedItem);
```

#### Removing an item from a given position in the original array

```javascript
const notes = [ 'note1', 'note2', 'note3'];

const splicedItem = notes.splice(1, 1);
console.log('Note array is changed after splice()', notes);
console.log('Spliaced() Item = ', splicedItem);
```

#### Removing an item from a given position in the original array

```javascript
const notes = [ 'note1', 'note2', 'note3'];

const splicedItemAdd = notes.splice(1, 1, 'note 2', 'note 3');
console.log('Note array after splice() with an add', notes);
```

#### Resources

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  

## Arrays - Foreach()

iterating through a collection with a callback
```javascript
const notes = [ 'note1', 'note2', 'note3'];
notes.forEach(function(note) {
    console.log(note);
});
console.log();
```

#### Iterating through a collection with an arrow function

```javascript
const notes = [ 'note1', 'note2', 'note3'];
notes.forEach((note) => {
    console.log(note);
});
console.log();
```

#### Iterating through a collection with an arrow function

```javascript
const notes = [ 'note1', 'note2', 'note3'];
notes.forEach((note, index) => {
    console.log(`${note} is in position ${index}`);
});
console.log();
```

## For()

#### Basic Example

```javascript
const notes = [ 'note1', 'note2', 'note3'];
for(const positionNumber in notes) {
    console.log(`${notes[positionNumber]} is in position ${positionNumber}`);
}
console.log();
```

####  For Loop iterating upwards

```javascript
const notes = [ 'note1', 'note2', 'note3'];
for(let count = 0; count < notes.length; count++) {
    console.log(`${notes[count]} is in position ${count}`);
}
console.log();
```

#### For Loop in reverse order -> iterating backwards

```javascript
const notes = [ 'note1', 'note2', 'note3'];
for(let count = (notes.length - 1); count >= 0; count--) {
    console.log(`${notes[count]} is in position ${count}`);
}
console.log();
```

#### Resources  

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 
-   [ForEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## Map() and Reduce()

(todo)

#### Resources
-   [Map, filter and reduce](https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d)
-   [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
-   [Reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
-   [ReduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)

## Filter()

Filtering items out of an array

```javascript
const notes = [{
    title: 'note1',
    body: 'body1'},
    {title: 'note2',
    body: 'body2'},
    {title: 'note3',
    body: 'body3'}];

const filteredResult = notes.filter((note) => {
    return note.title.toLowerCase() === query.toLowerCase();
});

console.log(filteredResults(notes, 'note3'));
```

#### Searching for an item in an array

```javascript
const notes = [{
    title: 'note1',
    body: 'body1'},
    {title: 'note2',
    body: 'body2'},
    {title: 'note3',
    body: 'body3'}];

// Searching a valid item - will return the index number the match exists
console.log('Basic search with matching item = ', notes.indexOf('note2'));

// Searching an item - will return -1 for non-matching result
console.log('Basic search with non-matching item = ', notes.indexOf('note5'));

//Compaing Objects
const isEqual = {} === {};
console.log('Are two empty objects equal ', isEqual);

const emptyObjectArray = [{}];
console.log('IndexOf on an empty object will return -1= ', notes.indexOf({}));

// Objects are compared if it's the same obejct in memory, rather than  if two objects contain the same properties
// Compare two different objects then will always return false, as both obejcts will live in different bits within memory

const index = notes.findIndex((note, index) => {
    return note.title === 'note2'
});

console.log('findIndex on a match = ', index);
```
#### Resources

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 
-   [Filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)