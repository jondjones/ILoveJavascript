# Design Patterns

## Decorator

A wrapper can be thought of as a wrapper which extends the functionality of an object/function while maintaining the interface.

```javascript
function Drink(type) {
  this._cost = 2.50;
  this._type = type;
}

Drink.prototype.cost = function () {
  return this._cost;
}

function DrinkDecorator(drink) {
  Drink.call(this);
    this.drink = drink;
}
DrinkDecorator.prototype = Object.create(Drink.prototype);
DrinkDecorator.prototype.cost = function () {
  return this._cost + this.drink.cost();
}

function WithSugar(sandwich) {
  DrinkDecorator.call(this, sandwich);
    this._cost = 0.50;
}
WithSugar.prototype = Object.create(DrinkDecorator.prototype);

function Coffee() {
  Drink.call(this);
    this._cost = 5;
}
Coffee.prototype = Object.create(Drink.prototype);

var coffee = new Coffee();
coffee = new WithSugar(coffee);
console.log(coffee.cost()); // 3
```

## Facade

```javascript
class Albumns {
  get resources() {
    return [
      { id: 1, title: "Ride The Lightening" },
    ];
  }

  fetch(id) {
    return this.resources.find(item => item.id === id);
  }
}

class GetMovie {
  constructor(id) {
    return this.resources.find(item => item.id === id);
  }

  get resources() {
    return [
      { id: 1, title: "Lord Of The Rings" }
    ];
  }
}

class Facade {
  constructor(type) {
    this.type = type;
  }

  get(id) {
    switch (this.type) {
      case "music": {
        const db = new FetchMusic();
        return db.fetch(id);
      }

      case "movie": {
        const db = new GetMovie();
        return db.fetch(id);
      }
    }
  }
}
```

##  Proxy Pattern 

Control access to a resource:

```javascript
var proxied = jQuery.ajax;
jQuery.ajax = function() { 
    jQuery("#loading").dialog({modal: true});
    return proxied.apply(this, arguments);
}
```

## Adapter Pattern

An adapter allows two incompatible interfaces to work together. 

```javascript
var LoggerOne = (log) => console.log(log);
var LoggerTwo = (log, log2) => console.log(`${log} ${log2}`);

function LoggerAdapter(loggerObj) {  
    if(loggerObj.getType() === "LoggerOne") {
        LoggerOne(loggerObj.text);
    }
    if(loggerObj.getType() === "LoggerTwo") {
        LoggerOne(loggerObj.text, loggerObj.text);
    } 
}
```

## Singleton

Restricts the instantiation of a class to one object. 

```javascript
const myFucntion = (function(){
    const name = 'example'
    const getName = () => name

    return {
        getName
    }
}())

myFucntion.getName() // example
president.name // undefined
```

## Factory

Creates a pre-populated object for you

```javascript
class MyObject {
  constructor(name){
    this.name = name
  }

  getName(){
    return this.name
  }
}

const Factory = {
  Object : (name) => new MyObject(name)
}
const door = Factory.Object("Name")
```

## flyweight

An object that minimizes memory use by sharing as much data as possible with other similar objects

```javascript
// Anything that will be cached is flyweight
class Drink {
}

// Acts as a factory and saves the tea
class Server {
    constructor(){
        this.availableItems = {}
    }

    make(preference) {
        this.availableItems[preference] = this.availableItems[preference] || (new Drink())
        return this.availableItems[preference]
    }
}

class Shop {
    constructor(server) {
        this.server = server
        this.orders = []
    }

    takeOrder(type, table) {
        this.orders[table] = this.server.make(availableItems)
    }

    serve() {
        this.orders.forEach((order, index) => {
            console.log('Serving table #' + index)
        })
    }
}
```

# Proxy

Restricts Access To Something

```javascript
class Validator {
    login() {
        console.log('loged in')
    }

    logout() {
        console.log('logged out')
    }
}

class Security {
    constructor(validator) {
        this.door = door
    }

    login(password) {
        if (this.authenticate(password)) {
            return this.validator.login()
        }
        
        console.log('Invalid Login Attempt')
    }

    authenticate(password) {
        return // add logic to authenicate here
    }

    logout() {
        this.validator.logout()
    }
}
```

# Bridge

Decouple an abstraction from its implementation so that the two can vary independently, .e.g move from inheritance to composition!

```javascript
class Tea{ 
    constructor(extras) {
        this.extras = extras
    }
    
    getDrink() {
        return "Tea with " + this.extras.get()
    }
}

class Sugar{
    get() {
        return 'Sugar'
    }
}

const tea = new Tea()
const about = new Sugar(tea)
```

## Composite

Composite pattern lets clients to treat the individual objects in a uniform manner.

```javascript
class Developer {

    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    getName() {
        return this.name
    }

    setSalary(salary) {
        this.salary = salary
    }

    getSalary() {
        return this.salary
    }
}

class Designer {

    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    getName() {
        return this.name
    }

    setSalary(salary) {
        this.salary = salary
    }

    getSalary() {
        return this.salary
    }
}

class School {
    constructor(){
        this.pupils = []
    }

    addPupil(pupils) {
        this.pupils.push(pupil)
    }

    getSalaries() {
        let salary = 0
        this.pupils.forEach(pupils => {
            salary += employee.getSalary()
        })

        return netSalary
    }
}

const dev = new Developer('Jon', 12000)
const designer = new Designer('Ana', 10000)

const school = new School()
school.addPupil(dev)
school.addPupil(designer)

console.log("Net salaries: " , organization.getNetSalaries()) // Net Salaries: 22000
```