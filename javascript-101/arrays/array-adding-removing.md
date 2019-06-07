

Adding a note to end of array
```javascript
const notes = [ 'note1', 'note2', 'note3'];

notes.push('note 4');
console.log('Note array', notes);
```
Remove last note
```javascript
const notes = [ 'note1', 'note2', 'note3'];

const poppedNote = notes.pop();
console.log('Note array', notes);
console.log('Popped Note', poppedNote);
```

Removing first note
```javascript
const notes = [ 'note1', 'note2', 'note3'];

const shiftedNote = notes.shift();
console.log('Note array after shift', notes);
console.log('Shifted Note', shiftedNote);
```

Adding an item to the beginning of the array - unshift
```javascript
const notes = [ 'note1', 'note2', 'note3'];

notes.unshift(shiftedNote);
console.log('Note array after unshift', notes);
```
Getting an item from an array without changing it

```javascript
const notes = [ 'note1', 'note2', 'note3'];

const slicedItem = notes.slice(1, 2);
console.log('Note array doesnt change after slice', notes);
console.log('Slaced() Item = ', slicedItem);
```

Removing an item from a given position in the oringal array
```javascript
const notes = [ 'note1', 'note2', 'note3'];

const splicedItem = notes.splice(1, 1);
console.log('Note array is changed after splice()', notes);
console.log('Spliaced() Item = ', splicedItem);
```

Removing an item from a given position in the oringal array
```javascript
const notes = [ 'note1', 'note2', 'note3'];

const splicedItemAdd = notes.splice(1, 1, 'note 2', 'note 3');
console.log('Note array after splice() with an add', notes);
```

### Resources
-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
---
[BACK](../README.md)