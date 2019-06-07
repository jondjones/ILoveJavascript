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

Searching for an item in an array

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
### Resources
-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 
-   [Filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
---
[BACK](../README.md)