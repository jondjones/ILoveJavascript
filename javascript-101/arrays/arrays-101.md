
Example arrays with different types of data
```javascript
const emptyArray = [];
const numberArray = [ 1, 2, 3, 4 ];
const charArray = [ 'a', 'b', 'c', 'd' ];
```

Display array
```javascript
const notes = [ 'note1', 'note2', 'note3'];
console.log('Note array', notes);
```

Get the number of items in the array
```javascript
const notes = [ 'note1', 'note2', 'note3'];
console.log(`Notes length = ${notes.length}`);
```
Display the first item in the array
```javascript
const notes = [ 'note1', 'note2', 'note3'];
console.log(`First Item = ${notes[0]}`);
```
Dynamically decide what item to display in the array, using an operation to determine item place
```javascript
const notes = [ 'note1', 'note2', 'note3'];
console.log(`First Item = = ${notes[notes.length - 3]}`);
```
Undefinied items result in an undefinied state
```javascript
const notes = [ 'note1', 'note2', 'note3'];
console.log(`Undefinied Item = ${notes[100]}`);
```
### Resources
-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 
---
[BACK](../README.md)