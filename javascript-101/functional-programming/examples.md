# Function Programming Functions()

I've recently finished reading [Functional-Light JavaScript: Pragmatic, Balanced FP in JavaScript Kindle Edition by Kyle Simpson](https://www.amazon.co.uk/Functional-Light-JavaScript-Pragmatic-Balanced-FP-ebook/dp/B0787DBFKH) which I highyl receommend anyone  new to functional programming to read.  In the book Kyle lists a number of useful FP fuctions, however, find the code snippets is pretty time consuming and tricky.  This page is a simple list of the more useful functions that are definied in that book for easy access.  

#### Constant

Certain APIs don't let you pass a value directly into a method, but require you to pass in a function

```javascript
function constant(v) {
    return function value(){
        return v;
    };
}
```

#### Componse 

```javascript
function compose(...fns) {
    return fns.reduceRight( function reducer(fn1,fn2){
        return function composed(...args){
            return fn2( fn1( ...args ) );
        };
    } );
}

```

#### Curry

```javascript
function curry(fn,arity = fn.length) {
    return (function nextCurried(prevArgs){
        return function curried(nextArg){
            var args = [ ...prevArgs, nextArg ];

            if (args.length >= arity) {
                return fn( ...args );
            }
            else {
                return nextCurried( args );
            }
        };
    })( [] );
}
```

#### Filter

```javascript
function filter(predicateFn,arr) {
    var newList = [];

    for (let [idx,v] of arr.entries()) {
        if (predicateFn( v, idx, arr )) {
            newList.push( v );
        }
    }

    return newList;
}
```

#### Filter Out

```javascript
function filterOut(predicateFn,arr) {
    return filterIn( not( predicateFn ), arr );
}
```

#### Flatten

```javascript
var flatten =
    arr =>
        arr.reduce(
            (list,v) =>
                list.concat( Array.isArray( v ) ? flatten( v ) : v )
        , [] );
```

#### Guard

```javascript
var guard =
    fn =>
        arg =>
            arg != null ? fn( arg ) : arg;
```

#### Identity 

Takes a argument and returns the value untouched.  Useful for chaining, using with filter etc...

```javascript
function identity(v) {
    return v;
}
```

#### IIFE Example

```javascript

var sum = (function IIFE(){

    return function sum(...nums) {
        return sumRec( /*initialResult=*/0, ...nums );
    }

    function sumRec(result,num1,...nums) {
        result = result + num1;
        if (nums.length == 0) return result;
        return sumRec( result, ...nums );
    }

})();

sum( 3, 1, 17, 94, 8 );  
```

#### Make

```javascript
function makeObjProp(name,value) {
    return setProp( name, {}, value );
}
```

#### Map

```javascript
function map(mapperFn,arr) {
    var newList = [];

    for (let [idx,v] of arr.entries()) {
        newList.push(
            mapperFn( v, idx, arr )
        );
    }

    return newList;
}
```

#### Merge

```javascript
function mergeLists(arr1,arr2) {
    var merged = [];
    arr1 = [...arr1];
    arr2 = [...arr2];

    while (arr1.length > 0 || arr2.length > 0) {
        if (arr1.length > 0) {
            merged.push( arr1.shift() );
        }
        if (arr2.length > 0) {
            merged.push( arr2.shift() );
        }
    }

    return merged;
}
```

#### Not

```javascript
function not(predicate) {
    return function negated(...args){
        return !predicate( ...args );
    };
}
```

#### Partial 

```javascript
function partial(fn,...presetArgs) {
	return function partiallyApplied(...laterArgs){
		return fn( ...presetArgs, ...laterArgs );
	};
}
```

#### Partial Props

```javascript
function partialProps(fn,presetArgsObj) {
    return function partiallyApplied(laterArgsObj){
        return fn( Object.assign( {}, presetArgsObj, laterArgsObj ) );
    };
}
```

#### Partial Right

```javascript
function partialRight(fn,...presetArgs) {
    return function partiallyApplied(...laterArgs){
        return fn( ...laterArgs, ...presetArgs );
    };
}
```

#### Pipe

```javascript
function pipe(...fns) {
    return function piped(result){
        var list = [...fns];

        while (list.length > 0) {
            // take the first function from the list
            // and execute it
            result = list.shift()( result );
        }

        return result;
    };
}
```

#### Prop

```javascript
function prop(name,obj) {
	return obj[name];
}
```

#### Reduce

```javascript
function reduce(reducerFn,initialValue,arr) {
    var acc, startIdx;

    if (arguments.length == 3) {
        acc = initialValue;
        startIdx = 0;
    }
    else if (arr.length > 0) {
        acc = arr[0];
        startIdx = 1;
    }
    else {
        throw new Error( "Must provide at least one value." );
    }

    for (let idx = startIdx; idx < arr.length; idx++) {
        acc = reducerFn( acc, arr[idx], idx, arr );
    }

    return acc;
}
```

#### Reverse Args

```javascript
function reverseArgs(fn) {
	return function argsReversed(...args){
		return fn( ...args.reverse() );
	};
}
```

#### SetProp

```javascript
function setProp(name,obj,val) {
	var o = Object.assign( {}, obj );
	o[name] = val;
	return o;
}
```

#### Spred Args

```javascript
function spreadArgs(fn) {
	return function spreadFn(argsArr){
		return fn( ...argsArr );
	};
}
```

#### When

```javascript

function when(predicate,fn) {
    return function conditional(...args){
        if (predicate( ...args )) {
            return fn( ...args );
        }
    };
}
```

#### Unary

Pass a single argument to a function

```javascript
function unary(fn) {
    return function onlyOneArg(arg){
        return fn( arg );
    };
}
```

#### Uncurry

```javascript
function uncurry(fn) {
	return function uncurried(...args){
		var ret = fn;

		for (let i = 0; i < args.length; i++) {
			ret = ret( args[i] );
		}

		return ret;
	};
}
```

#### Unique

```javascript
function unique(list) {
    var uniqList = [];

    for (let v of list) {
        if (uniqList.indexOf( v ) === -1 ) {
            uniqList.push( v );
        }
    }

    return uniqList;
}
```

```javascript
var unique =
    arr =>
        arr.filter(
            (v,idx) =>
                arr.indexOf( v ) == idx
        );
```

#### Zip

```javascript
function zip(arr1,arr2) {
    var zipped = [];
    arr1 = [...arr1];
    arr2 = [...arr2];

    while (arr1.length > 0 && arr2.length > 0) {
        zipped.push( [ arr1.shift(), arr2.shift() ] );
    }

    return zipped;
}
```

More information can be found [here](https://github.com/getify/Functional-Light-JS).

---

:arrow_left: [BACK](../README.md)