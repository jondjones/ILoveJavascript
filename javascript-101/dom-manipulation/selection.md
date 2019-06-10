# Selection

Querying DOM for the first element match it finds
```javascript
const p = document.querySelector('p');
p.textContent = h1.textContent + '.';
```

Querying DOM for the first class match it finds
```javascript
const myClass = document.querySelector('.my-class');
myClass.textContent = h1.textContent + '.';
```

Querying DOM for the first id match it finds
```javascript
const myId = document.querySelector('#my-id');
myId.textContent = h1.textContent + '.';
```

Querying DOM for multiple elements
```javascript
const divs = document.querySelectorAll('div');
divs.forEach(function (div) {
    p.textContent = 'some content';
})
```

Removing an element from DOM
```javascript
const h1 = document.querySelector('.heading');
h1.remove();
```

---

:arrow_left: [BACK](../README.md)