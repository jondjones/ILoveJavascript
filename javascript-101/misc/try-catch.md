# Try/Catch

try/catch is a way to catch errors thrown in your code so you can handle them  
throw - exposes a message you can pass  

```javascript
try {
    throw('error');
} catch (e) {
    console.log(e);
}
```

throw new Error - exposes an error event with two params name & message
```javascript
try {
    throw new Error('An error', 'message');
} catch (e) {
    console.log(e);
}
```

---

:arrow_left: [BACK](../README.md)