
## FOREACH & FOR LOOPS

iterating through a collection with a callback
```javascript
const notes = [ 'note1', 'note2', 'note3'];
notes.forEach(function(note) {
    console.log(note);
});
console.log();
```


Iterating through a collection with an arrow function
```javascript
const notes = [ 'note1', 'note2', 'note3'];
notes.forEach((note) => {
    console.log(note);
});
console.log();
```

Iterating through a collection with an arrow function
```javascript
const notes = [ 'note1', 'note2', 'note3'];
notes.forEach((note, index) => {
    console.log(`${note} is in position ${index}`);
});
console.log();
```

## FOR LOOPS
Basic Example
```javascript
const notes = [ 'note1', 'note2', 'note3'];
for(const positionNumber in notes) {
    console.log(`${notes[positionNumber]} is in position ${positionNumber}`);
}
console.log();
```

For Loop iterating upwards -> interating
```javascript
const notes = [ 'note1', 'note2', 'note3'];
for(let count = 0; count < notes.length; count++) {
    console.log(`${notes[count]} is in position ${count}`);
}
console.log();
```

For Loop in reverse order -> iterating backwards
```javascript
const notes = [ 'note1', 'note2', 'note3'];
for(let count = (notes.length - 1); count >= 0; count--) {
    console.log(`${notes[count]} is in position ${count}`);
}
console.log();
```
### Resources
-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 
-   [ForEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
---
[BACK](../README.md)