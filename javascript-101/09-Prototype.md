
# Prototype And Lexical Scoping

Closures and lexical scoping

```javascript
let globalContextDecalaredVariable = 2
function multiplyThis(n) {
    // Within a local function scope you have access to globally scoped variables
    let functionContextDeclaredVariable = n * globalContextDecalaredVariable
    return functionContextDeclaredVariable
};
```

Closure example, counter is created in the global context

```javascript
function createCounter() {
    let counter = 0; // counter is created in a local scoped context
    const myFunction = function() { // myFunction is locally scoped. 
        counter = counter + 1 // 
        return counter
    }
    return myFunction // local execution context ends, myFunction and counter no longer exist
};

// How you may expect it to work
const increment = createCounter(); 
```

Global scoped, contains a function definition returned by createCounter().  It is no longer labeled myFunction, it is labeled increment within the global context

```javascript
const c1 = increment(); 

```
Create a new execution context, try to look up counter in local execution context, it does not exist.  Look for counter in global execution context, it does not exist.  Javascript will evaluate the code as counter = undefined + 1 and declare a new local variable labeled 'counter' with the number 1.  Like truthy and falsey comparisons, undefined is sort of 0, the value 1 gets returned here

```javascript
const c2 = increment(); // repeat above, 1 gets outputted

console.log('example increment', c1, c2); // this console log, outputs 1 and 2.  
```

Even though execution has ended and counter is killed, the enginge somehow still gets access to counter, is counter in global sopce, local scope?  Somehow it can still access the state of counter, how?

Whenever you declare a new function and assign it to a variable, you store the function definition and a CLOSURE.  The closure contains all the variables that are in scope at the time of creation of the function.

```javascript
function createCounterSecondTime() {
    let counter = 0; // counter is created in a local scoped context

    // myFunction is assigin to a function, so a closure is created
    // The closure (counter = 0) is included as part of the function definition
    const myFunction = function() { 
        counter = counter + 1 
        return counter;
    }
    return myFunction;  // returning the function definition and its closure()
};

const myVariable2 = createCounterSecondTime(); // This creates a closure, e.g. any vars and their state is stored within a 
backpack and returned with the function definition
```

In this example a var 'counter' is added to the backpack with a value of 0.  When myVariable2() is called its a function definition with a closure, counter = 0.  When the function runs because of lexial scoping before it tries to find counter in the local execution context, or, global execution context.  Javascript looks in the backpack for a closure called 'counter'.  In this situation 'counter' is set to 0, the result of the function is 1.

```javascript
const closure1 = myVariable2();  // This will return 1, the backpack closure value 'counter' will now be 1
const closure2 = myVariable2(); // When this runs, the function will look in the backpack first, find the counter closure variable set to 1.  It will output 2
```

The key to remember is that when a function gets declared, it contains a function definition and a closure. The closure is a collection of all the variables in scope at the time of creation of the function.  

Private variables using closures by default Javascript does not provide a private keyword

```javascript
const privatePropertyExample = function() {
    let count = 0;

    return {
        increment() {
            count++;
        }, decrement() {
            count--;
        }, get() {
            return count;
        }
    }
}

const exampleOne = privatePropertyExample();
exampleOne.increment();
console.log(exampleOne.get());

// Throws undefinied as we don not have access to count
console.log(exampleOne.count);
```

## Classes & Subclasses

Instead of having to use constructor functions you can use class.  Using class is syntax sugar, under the hood it works exactly the same constructor functions.  Using class results in cleaner code

```javascript
class MyClass {
    constructor(argument) {
        this.argument = argument;
    };

    myMethod() {
        console.log('Hi');
    };

    myOverride() {
        console.log('MyClass');
    };
};
```

Use the keyword modifier extends to create a sub class of a class:

```javascript
class MySubClass extends MyClass{
    constructor(argument) {
        super(argument); // Need to call super in sub class to call the base class constructor, otherwise exception is thrown
    };

    myOverride() {
        console.log('MySubClass');
    };

    getBaseProperty() {
        console.log(this.argument);
    };
};
```

```javascript
const myClass = new MyClass('1');
myClass.myMethod();
myClass.myOverride();

const mySubClass = new MySubClass('example text');
mySubClass.myMethod();
mySubClass.myOverride();
mySubClass.getBaseProperty();
```

#### Resources

-   [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
-   [Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor)
-   [New](https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e)
-   [Prototype](https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b)

## Get & Set

You can use getters and setters to help you provide better encapsulation within your objects.  Using this appraoch means you can define private variables that only the object itself can modify.  This is a lot better than making instance variables public, as outside classes shouldn't be able to directly manipulate state within your classes

```javascript
const myObject = {

    innerProperty: 'myProperty',

    // Defining a getter
    get myProperty() {
        return this.innerProperty;
    },

    // Defining a setter
    set myProperty(value) {
        console.log(value);
        this.innerProperty = value;
    }
};

// Getting 
console.log(myObject.myProperty);
```

Setting -> will do a console.log()

```javascript
myObject.myProperty = 'setting';
console.log(myObject.myProperty);
console.log(myObject.innerProperty);
```

## hasOwnProperty()

Object is a reference to the global JS.  Adding to object will add a method on all objects.  Object.prototype.someNewMethod = () => 'blah';.  As we attached some method to the JS object class, everything else will be able to access it.  This is not something I recommend

```javascript
const different = {};
console.log(different.someNewMethod());

const object = new Object();
```

Calling `__proto__` will display the global objects prototypes, so in our case someNewMethod():

```javascript
console.log('objects prototypes', object.__proto__);
```

Object does not have a prototype as it's the bae object.  Trying to view Objects prototype will be null:

```javascript
console.log('objects prototype prototype will be null', object.__proto__.__proto__);
```

hasOwnProperty() on the object will be false as someNewMethod is declared on the prototype:

```javascript
console.log(object.hasOwnProperty('someNewMethod'));
```

hasOwnProperty() on the prototype will be true as someNewMethod is declared on the prototype:

```javascript
console.log(object.__proto__.hasOwnProperty('someNewMethod'));
```

```javascript
try {
    object.prototype.hasOwnProperty('someNewMethod');
} catch (e) {
    console.log('This will throw as you cant use prototype to access instance prototypes');
}
```

#### Custom Object

```javascript
const MyConstructorFunction = function () {
};

const person = new MyConstructorFunction();
console.log('Calling __proto__.__proto__ on a declared object will show the global js object', person.__proto__.__proto__);
console.log('Calling __proto__.__proto__.__proto__ as the global object is always base', person.__proto__.__proto__.__proto__);
```

## Prototype Chain

#### int

```javascript
const int = 9;
console.log('int => ', int);
console.log(`${typeof int} =>`, int.__proto__);
console.log(`${typeof int.__proto__} =>`, int.__proto__.__proto__);
```

#### number

```javascript
const number = new Number(1);;
console.log('number => ', number);
console.log(`${typeof number} =>`, number.__proto__);
console.log(`${typeof number.__proto__} =>`, number.__proto__.__proto__);
```

#### bool

```javascript
const bool = true;
console.log('bool => ', bool);
console.log(`${typeof bool} =>`, bool.__proto__);
console.log(`${typeof bool.__proto__} =>`, bool.__proto__.__proto__);
```

#### string

```javascript
const stringExample = 'ji';
console.log('string => ', stringExample);
console.log(`${typeof stringExample} =>`, stringExample.__proto__);
console.log(`${typeof stringExample.__proto__} =>`, stringExample.__proto__.__proto__);
```

null
```javascript
try {
    const nullExample = null;
    console.log('null => ', nullExample);
    console.log(`${typeof nullExample} =>`, nullExample.__proto__);
} catch(e) {
    console.log('null has no prototype chain');
}
```

#### undefined

```javascript
try {
    const undefinedExample = undefined;
    console.log('undefined => ', undefinedExample);
    console.log(`${typeof undefinedExample} =>`, undefinedExample.__proto__);
} catch(e) {
    console.log('undefined has no prototype chain');
}
```

#### array

```javascript
const array = [];
console.log('array => ', array);
console.log(`${typeof array} =>`, array.__proto__);
```

#### object

```javascript
const object = {};
console.log('object => ', object);
console.log(`${typeof object} =>`, object.__proto__);
```
## Prototype Declaration

```javascript
const MyConstructorFunction = function () {
};

const myObject = new MyConstructorFunction();
```

Example() does not exist on creation and throws exception

```javascript
try {
    myObject.Example();
} catch (e) {
    console.log('Example is not definied');
}

MyConstructorFunction.prototype.Example = function () {
    console.log(`Example`);
};
```

Example() now exists and the call runs... even though the object has already been created.  Declaring a prototype function/property after object declaration still get associated.  Any change made to the prototype at any time of execution will be made to everything:

```javascript
myObject.Example();
```

You can define instance methods/properties to specific objects.  The method decoration below, will only be available to this object :

```javascript
myObject.InstanceMethod = function() {
    console.log('InstanceMethod');
};
```

This will work:

```javascript
myObject.InstanceMethod();

try {
    const mySecondObject = new MyConstructorFunction();
    mySecondObject.InstanceMethod();
} catch (e) {
    console.log('This will not work.  Function assocated to instance not the prototype');
}
```

Overriding prototype behavior is also possible:

```javascript
myObject.Example = function() {
    console.log(`Overriding prototype method on instance`); 
}
```

This call will now use the instance method declared above.  This will not use the global prototype version.  In this way you can customize classes based on your needs.

```javascript
myObject.Example();
```
#### Resources
-   [Prototype](https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b)

## Prototype Inheritance 101

Constructor function need to use a regular function, instead of an arrow function arrow functions do not bind this

```javascript
const MyConstructorFunction = function (someText) {
    this.someText = someText;
    this.myArray = ['one', 'two'];
};
```

Attaching a method to a constructor function.  Attaching methods is done using prototype inheritance.  You can attach things to the prototype and then access them using 'this':

```javascript
MyConstructorFunction.prototype.getText = function () {
    return `Using prototype and this, I can access the functions properties = ${this.someText}`;
};
```

Defining global static  text

```javascript
MyConstructorFunction.prototype.globalText = 'Global Text';
```

You can override base properties

```javascript
MyConstructorFunction.prototype.overrideBaseProperties = function(moreText) {
    this.someText = moreText;
};
```

You should use arrow functions to iterate through items in an array arrow functions do not bind this and will use the correct inheritance scope.  Create a new function, using function will rebind 'this' and stop you getting access to the prototype properties

```javascript
MyConstructorFunction.prototype.scopeBindingExample = function(moreText) {

    try {
        this.myArray.forEach(function(item) {
            console.log(`prototype property someText = ${this.someText} when decalred in normal function`);
        });
    } catch (e) {
        console.log('Exception thrown when accessing someText, a normal function definition rebinds \'this\', so access to prototype is lost')
    }

    this.myArray.forEach( (item) => {
        console.log(`someText =  ${this.someText} and is available because the array was iterated using an arrow function.  Prototype scope is not rebound so 'this' still points to prototype`);
    });
};
```

Invalid way to call a constructor function results in undefined as the new keyword was omitted

```javascript
try {
    const myFunction = MyConstructorFunction();
console.log(myFunction);
} catch(e) {}
```

Correct way to call a constructor function need to use 'new' keyword.  Functions that you want to be objects should start with an uppercase letter

```javascript
const myObject = new MyConstructorFunction('text');
console.log(myObject.someText);
console.log(myObject.getText());
console.log(myObject.globalText);

myObject.overrideBaseProperties('new text');
console.log(myObject.getText());

console.log(myObject.scopeBindingExample());
```
#### Resources

-   [Prototype](https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b)

## Public & Private Properties

Private variables using closures by default Javascript does not provide a private keyword

```javascript
class PrivateAndPublicProperty {
    constructor(name) {
        const _count = 1  // this is private
        this.count = 2; // this is public
    };
    whatCanIAccess() {
        console.log('whatCanIAccess count = ', this.count); // this will have a value
        console.log('whatCanIAccess _count = ', this._count); // will be undefinied
    }
}
const exampleTwo = new PrivateAndPublicProperty();
```

The constructor scope is private so _count is private using this will make it public

```javascript
console.log('example two accessing _count ', exampleTwo._count);
console.log('example two accessing count ', exampleTwo.count);

exampleTwo.whatCanIAccess();
```

Private variables using closures by default Javascript does not provide a private keyword

```javascript
const privatePropertyExample = function() {
    let count = 0;

    return {
        increment() {
            count++;
        }, decrement() {
            count--;
        }, get() {
            return count;
        }
    }
}

const exampleOne = privatePropertyExample();
exampleOne.increment();
console.log(exampleOne.get());
```

## Lexical Scoping

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

#### Basic Example
 
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

#### Variable Shadowing

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

#### Leaked Global

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

#### Correct Scope

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

#### Resources

-   [Scope](https://medium.com/@josephcardillo/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)

## Hoisting

```javascript
hosited = 10;
console.log(hosited);
var hosited ;
```
~This will console.log 10,, even though it hasn't be defined.

#### Resources

-   [Const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
-   [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
-   [Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)