# Local Storage

Read item from local storage
```javascript
localStorage.getItem('key');
```

Storing to local storage
```javascript
localStorage.setItemm('key', 'value');
```

Removing item from local storage
```javascript
localStorage.removeItem('key', 'value');
```

Editing item in local storage
```javascript
localStorage.setItem('key', 'updating');
```

Clear everything
```javascript
localStorage.clear();
```

Watch changes in local storage to sync b rowser tabs
```javascript
window.addEventListener('storage', function (e) {
})
```
---
[BACK](../README.md)