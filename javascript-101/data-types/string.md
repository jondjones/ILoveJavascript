# Strings

```javascript
const name = 'jon   ';
console.log('Original String = ' + name);
console.log();
console.log('Length = ' + name.length);
console.log('Uppercase = ' + name.toUpperCase());
console.log('Lowercase = ' + name.toLowerCase());
console.log('Include(\'jon\') = ' + name.includes(name));
console.log('Finding a String using indexOf(\'on\') = ' + name.indexOf("on"));
console.log('Searching a String using search(\'jon\') = ' + name.search("jon"));
console.log('Slicing first character = ',name.slice(0, 1));
console.log('Sibstring = ', name.substring(1, 3));
console.log('Replace = ', name.replace('on', 'this part has been replaced'));
console.log('Trim = ', name.trim());
console.log('Concat = ', name.concat(name));
console.log('CharAt(2) = ', name.charAt(2));
console.log('Char[0] = ', name[0]);
console.log('Split(o) = ', name.split('o'));
console.log();
```

TEMPLATE STRINGS/STRING INTERPOLATION
If you need to combine string your code will be easier to read when you use template strings

Template string

```javascript
console.log(`city=${city} country=${country}`);
```

Manually concatinating strings

```javascript
console.log('city=' + city + ' country=' + country);
```

### Resources
-   [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
-   [Value Type Vs Reference Type](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
---
[BACK](../README.md)