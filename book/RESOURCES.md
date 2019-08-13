# Resources

This section contains a list of useful resources.

## Javascript Stack

You maybe new to web development, or maybe you haven't heard of some of the technologies we use. Below are different technologies we use to build our stack.

#### Beginner

These are the technologies you will need to know to get you off the ground working with JS. With these you will be able to build components and see them on the website.

-   **NVM** - [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
We try to ensure our node versions are in-sync but to make sure you can run multiple versions we recommend using NVM
-   **NodeJS** - [https://nodejs.org/en/](https://nodejs.org/en/)
NodeJS is used to build our presentation layer
-   **YARN** - [https://yarnpkg.com](https://yarnpkg.com)
For more performant and reliable package-management we use Yarn
-   **TypeScript** - [https://www.typescriptlang.org/](https://www.typescriptlang.org/) 
To make our code more stable we want to use static typing: .
-   **Express** - [https://expressjs.com/](https://expressjs.com/)
A web server framework for node used in our presentation layer: 
-   **React** - [https://reactjs.org/](https://reactjs.org/)
React is used to build our component library: 
-   **Redux** - [https://redux.js.org/](https://redux.js.org/)
Redux is how we handle state management: 
-   **BEM** [http://getbem.com/](http://getbem.com/)
BEM (Block Element Module) is a methodology we use to style our components: 
-   **PostCSS** - [https://postcss.org/](https://postcss.org/)
Like [Babel](https://babeljs.io/) PostCSS allows us to use modern CSS with less overheads
-   **Jest** - [https://jestjs.io/](https://jestjs.io/)
We use Jest as our unit test runner, assertions, coverage and mocking: 
-   **Cypress** - [https://www.cypress.io/](https://www.cypress.io/)
A modern functional test runner, we use to test components and presentation layers like a customer: .
-   **YAML** - [https://yaml.org/](https://yaml.org/)
We use YAML for configuration files, it's a standard that allows for readable data serialization: 
-   **Commitizen** - [https://commitizen.github.io/cz-cli/](https://commitizen.github.io/cz-cli/)
We have to have consistent commit messages so we can automate documentation, alerts and pretty much everything we can: 

#### Intermediate

Once you are comfortable with the basic features, these next technologies will help you debug and improve the ecosystem.

-   **Lerna** - [https://github.com/lerna/lerna](https://github.com/lerna/lerna)
A monorepo manager
-   **Babel** - [https://babeljs.io/](https://babeljs.io/)
We want to use the latest JavaScript syntax but we need to support customers with older browsers so we use babel.
-   **Webpack** - [https://https://webpack.js.org/](https://https://webpack.js.org/)
We want to make sure our website is performant and our developer experience as smooth as possible, for this we use web-pack
-   **Make** - [https://www.gnu.org/software/make/](https://www.gnu.org/software/make/)
Make is a build automation tool that we use to run commands in our CI/CD pipeline

#### Advanced

Once you are comfortable with the intermediate features, these will help you learn about our infrastructure and run times.

-   **Docker** - [https://www.docker.com/](https://www.docker.com/)
So we can have consistent builds and deploys we use Docker as our container platform
-   **Terraform** - [https://www.terraform.io/](https://www.terraform.io/)
Write, Plan, and Create Infrastructure as Code. A platform agnostic approach to infrastructure provisionment
-   **Kubernetes** - [https://kubernetes.io/](Orchestration)
Orchestrating, deploying and scaling out containers
-   **Helm** - [https://kubernetes.io/](Orchestration)
Similar to [Yarn](https://yarnpkg.com) however Helm is package management

## Packages

-   [Axios](https://github.com/axios/axio)
-   [Babel](https://babeljs.io)
-   [CSS Modules](https://github.com/css-modules/css-module)
-   [Classnames](https://github.com/JedWatson/classname)
-   [Create React App](https://github.com/facebook/create-react-app)
-   [Enzyme](https://github.com/airbnb/enzym)
-   [Heroku](https://devcenter.heroku.com/articles/heroku-cli)
-   [Isomorphic Fetch](https://github.com/matthew-andrews/isomorphic-fetch)
-   [Jest](https://jestjs.io)
-   [Lodash](https://lodash.com)
-   [Mobx](https://mobx.js.org)
-   [Mobx React](https://github.com/mobxjs/mobx-react)
-   [Node](https://nodejs.org/en)
-   [NPM](https://docs.npmjs.com)
-   [NVM](https://github.com/creationix/nvm)
-   [Overreacted](https://github.com/gaearon/overreacted.io)
-   [React Alternative Class Component Syntax](https://github.com/the-road-to-learn-react/react-alternative-class-component-syntax)
-   [React Devtools](https://github.com/facebook/react-devtool)
-   [React Native](https://facebook.github.io/react-native/)
-   [React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
-   [React Redux](https://github.com/reduxjs/react-redux)
-   [React Router](https://github.com/ReactTraining/react-router)
-   [Redux](https://redux.js.org/introduction/getting-starter)
-   [Styled Components](https://github.com/styled-components/styled-components)
-   [Yarn](https://yarnpkg.com/en/docs)
-   [Essential React Libraries in 2018](https://www.robinwieruch.de/essential-react-libraries-framework)

##  Cheatsheets

-   [Easings](https://easings.net/) 
-   [Enzyme](https://devhints.io/enzyme)
-   [Emmit Cheat Sheet](https://docs.emmet.io/cheat-sheet/")
-   [ES6](https://devhints.io/es6)
-   [Complete list of Github markdown emoji markup](https://gist.github.com/rxaviers/7360908)
-   [Jest](https://devhints.io/jest)
-   [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
-   [React](https://devhints.io/react)
-   [ReduxForm](https://redux-form.com/6.6.2/examples/fieldlevelvalidation/)

##   Interesting Reads

-   [A guide to setting up Vim for JavaScript development](https://freshman.tech/vim-javascript/)
-   [Best Practices for Using Modern JavaScript Syntax](https://www.sitepoint.com/modern-javascript-best-practices/)
-   [Clean Code in Javascript](https://github.com/ryanmcdermott/clean-code-javascript)
-   [How I wrote the world's fastest JavaScript memoization library](https://community.risingstack.com/the-worlds-fastest-javascript-memoization-library/)
-   [JavaScript Clean Coding Best Practices](https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale//)
-   [Keeping your code clean](https://codeburst.io/keeping-your-code-clean-d30bcffd1a10)
-   [7 Useful JavaScript Tricks](https://davidwalsh.name/javascript-tricks)

## Interesting Videos

-   [What’s new in JavaScript Google I/O 19](https://www.youtube.com/watch?v=c0oy0vQKEZE)
-   [Keep Betting on JavaScript - Kyle Simpson](https://www.youtube.com/watch?v=ZrKjgSfpppM)

##  Important Programming Concepts

-   [Call Stack](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)
-   [Call Stack, Event Loop , Tasks -  Understanding Javascript Function Executions](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)
-   [Understanding the JavaScript call stack](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4)
-   [Event Loop](https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4)
-   [Event loop - How JavaScript works](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
-   [Execution Context and Execution Stack](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)
-   [How JavaScript works](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
-   [Inheritance In Javascript](https://hackernoon.com/inheritance-in-javascript-21d2b82ffa6f)
-   [Inheritance with JavaScript](https://www.sitepoint.com/simple-inheritance-javascript/)
-   [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
-   [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

##  Functional Programming

-   [Why Functional Programming Matters](https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf)
-   [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide)
-   [Pure Functions](https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c?gi=9b1ebe5e3858)
-   [Higher Order Functions](https://eloquentjavascript.net/05_higher_order.html)
-   [Partial Application](http://benalman.com/news/2012/09/partial-application-in-javascript/)
-   [Recursion](https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f)

##  Design Patterns

-   [Deign Patterns Game](https://designpatternsgame.com/)
-   [4 JavaScript Design Patterns You Should Know](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)
-   [Essential JS Design Patterns Book](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
-   [GoF Design Patterns Implemented in Javascript](https://github.com/fbeline/Design-Patterns-JS)
-   [Javascript Design Patterns](https://medium.com/front-end-weekly/javascript-design-patterns-ed9d4c144c81)
-   [JavaScript Design Patterns](https://seesparkbox.com/foundry/javascript_design_patterns)
-   [Understanding Design Patterns in JavaScript](https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd)
-   [Design Patterns For Humans](https://github.com/sohamkamani/javascript-design-patterns-for-humans#-composite)
-   [JS Design Patterns](https://github.com/fbeline/design-patterns-JS)

## Books

-   [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

## Online Tools

-   [CanIUse](https://caniuse.com/)
-   [Canva](https://www.canva.com/)
-   [Codepen](https://codepen.io/)
-   [Stat Counter](http://gs.statcounter.com/screen-resolution-stats)

## Fonts &amp; Icons

-   [Google Fonts](https://fonts.google.com/)
-   [IcoMoon](https://icomoon.io/)
-   [Font Awesome](http://fontawesome.io/)

## Images and Videos

-   [Coverr.co](http://coverr.co) - Free videos you can use on your website, useful for background videos
-   [CutMyPic](http://www.cutmypic.com/) - Online photo and effects editor. Previously, I use this for the creating round pictures with shadow, although you can get a similar effect now just using CSS
-   [FreeImages.co.uk](http://www.freeimages.co.uk/index.htm) - Free stock images
-   [Graffiti Creator](http://www.graffiticreator.net/htm/creator_kodiak.htm#.W03XythKiu4)
-   [Tuxpi](https://www.tuxpi.com/) - Online photo and effects editor. I use this for the Polaroid pictures for the banners on this site
-   [Unsplash](https://unsplash.com/) - Hundreds of free stock imagery you can use

## Content

-   [Copyscape](http://www.copyscape.com/) - Check for plagiarized text
-   [Hilite](http://hilite.me/) - Code Snipper Pretty Printer
-   [Pingdom Website Speed Tester](https://tools.pingdom.com/) - Check your webpage to ensure they load quickly

# Javascript Dictionary

*Dyadic function* A function with two arguments
```javascript
function(one, two) {};
```

*Idempotent* You can call a function repeatedly the same way and it will always produce the same result.

```javascript
const myFunction => 1 + 1;
```

*Immediately Invoked Function Expression* Usually simplified to IIFE, pronounced iffy.

```javascript
(function() {
    alert("IIFE");
}());
```

*Isomorphic Application* Building an application that looks the same on the server and the client

*Monadic function* A function with one argument
```javascript
function(one) {};
```

*Pointfree style/Tacit Programming* Point refers to a function parameter.  Pointfree refers to not naming those parameters. 

```javascript
// not pointfree because we mention myParam in the code
const example = myParam => myParam.toLowerCase();

// pointfree
const example = compose(myParam, toLowerCase);
```

*Pure Functions* A function where the return value is only determined by its input values.  Having a function that does not add any side effects is desirable, as it reduces the chance of bugs being introduced.  Pure functions are also a lot easier to test. 

```javascript
const result = x => x * 2;
```