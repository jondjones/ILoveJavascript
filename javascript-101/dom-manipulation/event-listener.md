# Event Listeners

Event Listener - Abort - fired when the loading of a resource has been aborted.
```javascript
document.querySelector('button').addEventListener('abort', (e) => {
    console.log(e);
});
```

Event Listener
```javascript
document.querySelector('button').addEventListener('beforeinput', (e) => {
    console.log(e);
});
```

Event Listener - blur - fired when an element has lost focus. The main difference between this event and focusout is that only the latter bubbles.
```javascript
document.querySelector('button').addEventListener('blur', (e) => {
    console.log(e);
});
```

Event Listener - click - fired when a pointing device button (usually a mouse's primary button) is pressed and released on a single element
```

```javascript
document.querySelector('button').addEventListener('click', (e) => {
    console.log(e);
});
```

Event Listener - compositionstart - fired when the composition of a passage of text is prepared (fires with special characters that require a sequence of keys and other inputs such as speech recognition or word suggestion on mobile).
```javascript
document.querySelector('button').addEventListener('compositionstart', (e) => {
    console.log(e);
});
```

Event Listener - compositionupdate - fired when a character is added to a passage of text being composed (fires with special characters that require a sequence of keys and other inputs such as speech recognition or word suggestion on mobile).
```javascript
document.querySelector('button').addEventListener('compositionupdate', (e) => {
    console.log(e);
});
```

Event Listener - compositionend -  fired when the composition of a passage of text has been completed or cancelled (fires with special characters that require a sequence of keys and other inputs such as speech recognition or word suggestion on mobile).
```javascript
document.querySelector('button').addEventListener('compositionend', (e) => {
    console.log(e);
});
```

Event Listener - dblclick - fired when a pointing device button is clicked twice on a single element

```javascript
document.querySelector('button').addEventListener('dblclick', (e) => {
    console.log(e);
});
```

Event Listener - error - fired when an error occurred; the exact circumstances vary, events by this name are used from a variety of APIs.
```javascript
document.querySelector('button').addEventListener('error', (e) => {
    console.log(e);
});
```

Event Listener - focus - fired when an element has received focus. The main difference between this event and focusin is that only the latter bubbles
```javascript
document.querySelector('button').addEventListener('focus', (e) => {
    console.log(e);
});
```

Event Listener - focusin - fired when an element is about to receive focus. The main difference between this event and focus is that the latter doesn't bubble

```javascript
document.querySelector('button').addEventListener('focusin', (e) => {
    console.log(e);
});
```

Event Listener - focusout - fired when an element is about to lose focus. The main difference between this event and blur is that the latter doesn't bubble
```javascript
document.querySelector('button').addEventListener('focusout', (e) => {
    console.log(e);
});

Event Listener - input -  fired synchronously when the value of an <input>, <select>, or <textarea> element is changed. 
```javascript
document.querySelector('button').addEventListener('input', (e) => {
    console.log(e);
});
```

Event Listener - keydown - fired when a key is pressed down. Unlike the keypress event, the keydown event is fired for keys that produce a character value and for keys that do not produce a character value

```javascript
document.querySelector('button').addEventListener('keydown', (e) => {
    console.log(e);
});
```

Event Listener - keypress - fired when a key that produces a character value is pressed down. Examples of keys that produce a character value are alphabetic, numeric, and punctuation keys

```javascript
document.querySelector('button').addEventListener('keypress', (e) => {
    console.log(e);
});
```

Event Listener - keyup - fired when a key is released

```javascript
document.querySelector('button').addEventListener('keyup', (e) => {
    console.log(e);
});
```

Event Listener - load - fired when a resource and its dependent resources have finished loading

```javascript
document.querySelector('button').addEventListener('load', (e) => {
    console.log(e);
});
```

Event Listener - mousedown - fired when a pointing device button is pressed on an element.

```javascript
document.querySelector('button').addEventListener('mousedown', (e) => {
    console.log(e);
});
```

Event Listener - mouseenter - fired when a pointing device (usually a mouse) is moved over the element that has the listener attached

```javascript
document.querySelector('button').addEventListener('mouseenter', (e) => {
    console.log(e);
});
```

Event Listener - mouseleave - fired when the pointer of a pointing device (usually a mouse) is moved out of an element that has the listener attached to it

```javascript
document.querySelector('button').addEventListener('mouseleave', (e) => {
    console.log(e);
});
```

Event Listener - mousemove - fired when a pointing device (usually a mouse) is moved while over an element

```javascript
document.querySelector('button').addEventListener('mousemove', (e) => {
    console.log(e);
});
```

Event Listener - mouseout - fired when a pointing device (usually a mouse) is moved off the element that has the listener attached or off one of its children

```javascript
document.querySelector('button').addEventListener('mouseout', (e) => {
    console.log(e);
});
```

Event Listener - mouseover -  fired when a pointing device is moved onto the element that has the listener attached or onto one of its children

```javascript
document.querySelector('button').addEventListener('mouseover', (e) => {
    console.log(e);
});
```

Event Listener - mouseup - fired when a pointing device button is released over an element

```javascript
document.querySelector('button').addEventListener('mouseup', (e) => {
    console.log(e);
});
```

Event Listener - resize - fired when the document view has been resized

```javascript
document.querySelector('button').addEventListener('resize', (e) => {
    console.log(e);
});
```

Event Listener - scroll - fired when the document view or an element has been scrolled

```javascript
document.querySelector('button').addEventListener('scroll', (e) => {
    console.log(e);
});
```

Event Listener - select - fired when some text is being selected

```javascript
document.querySelector('button').addEventListener('select', (e) => {
    console.log(e);
});
```

Event Listener - unload - fired when the document or a child resource is being unloaded

```javascript
document.querySelector('button').addEventListener('unload', (e) => {
    console.log(e);
});
```

Event Listener - wheel - fired when a wheel button of a pointing device (usually a mouse) is rotated

```javascript
document.querySelector('button').addEventListener('wheel', (e) => {
    console.log(e);
});
```

---

:arrow_left: [BACK](../README.md)