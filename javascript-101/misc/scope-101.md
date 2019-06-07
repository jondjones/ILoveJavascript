# Scope 101 - Lexical Scoping

Global scope -> ANY VARIABLES DEFINIED OUTSIDE OF A CODE BLOCK WILL BE ADDED TO THE GLOBAL SCOPE  
Local scope -> ANY VARIABLE DEFINIED WITHIN A CODE BLOCK  

```javascript
try {
    // GLOBAL   
    const varOne = 'varOne';

    if (true) {
        console.log(varOne);

        // LOCAL
        const varTwo = 'varTwo';
    }

    // This will throw an exception, as varTwo was definiend within a code block (local scope)
    // and not in the global scope
    console.log(varTwo);
}
catch (e) {
    console.log(e);
}
```
 Example
 
```javascript
try {

    // GLOBAL   
        // LOCAL
            // LOCAL
        // LOCAL

    const varOne = 'varOne';

    if (true) {
        console.log(varOne);
        const varTwo = 'varTwo';

        if (true) {
            const varFour = 'varFour';
            console.log('varOne = ' + varOne);
        }

        console.log(varFour);
    }

    if (true) {
        const varThree= 'varThree';
        console.log(varThree);
    }

}
catch (e) {
    console.log(e);
}
```

Variable Shadowing

```javascript
try {
    const name = 'Jon';

    if (true) {

        // Even though the first name is a const,
        // This variable declartion is in a different scope
        let name = 'Jones';

        if (true) {

            // Due to lexical scope, this will never try to override the const name 
            name = 'New';
            console.log(name);
        }
    }

    if (true) {
        console.log(name);
    }
}
catch (e) {
    console.log(e);
}
```

Leaked Global

```javascript
try {

    if (true) {
        // This iresults when you forget to define a variable
        // With no variable declaration, like var, let or const it will create a glodal
        unwantedGlobal = 'Leaked Global';
    }

    console.log(unwantedGlobal);

}
catch (e) {
    console.log(e);
}
```

Correct Scope

```javascript
try {

    if (true) {
        // This will created a scoped variabled
        let scoped = 'Scoped Variabled';
    }

    console.log(scoped);

}
catch (e) {
    // using scoped above will now throw an exception
    console.log(e);
}
```
### Resources
-   [Scope](https://medium.com/@josephcardillo/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)
---
[BACK](../README.md)