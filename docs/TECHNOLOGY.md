# Technolgy

You maybe new to web development, or maybe you haven't heard of some of the technologies we use. Below are different technologies we use to build our stack.

## Beginner

These are the technologies you will need to know to get you off the ground working with JS. With these you will be able to build components and see them on the website.

-   **NVM** - [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)  
We try to ensure our node versions are insync but to make sure you can run multiple versions we recommend using NVM
-   **NodeJS** - [https://nodejs.org/en/](https://nodejs.org/en/)  
NodeJS is used to build our presentation layer
-   **YARN** - [https://yarnpkg.com](https://yarnpkg.com)  
For more performant and reliable packagemanagement we use Yarn
-   **TypeScript** - [https://www.typescriptlang.org/](https://www.typescriptlang.org/)   
To make our code more stable we want to use static typing: .
-   **Express** - [https://expressjs.com/](https://expressjs.com/)  
A web server framework for node used in our presentation layer: 
-   **React** - [https://reactjs.org/](https://reactjs.org/)  
React is used to build our component library: 
-   **Redux** - [https://redux.js.org/](https://redux.js.org/)  
Redux is how we handle state management: 
-   **BEM** [http://getbem.com/](http://getbem.com/)  
BEM (Block Element Module) is a methodogy we use to style our components: 
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

## Intermediate

Once you are comfortable with the basic features, these next technologies will help you debug and improve the ecosystem.

-   **Lerna** - [https://github.com/lerna/lerna](https://github.com/lerna/lerna)  
A monorepo manager
-   **Babel** - [https://babeljs.io/](https://babeljs.io/)  
We want to use the latest JavaScript syntax but we need to support customers with older browsers so we use babel.
-   **Webpack** - [https://https://webpack.js.org/](https://https://webpack.js.org/)  
We want to make sure our website is performant and our developer expirence as smooth as possible, for this we use webpack
-   **Make** - [https://www.gnu.org/software/make/](https://www.gnu.org/software/make/)  
Make is a build automation tool that we use to run commands in our CI/CD pipeline  

## Advanced

Once you are comfortable with the intermediate features, these will help you learn about our infrastucture and run times.

-   **Docker** - [https://www.docker.com/](https://www.docker.com/)  
So we can have consistent builds and deploys we use Docker as our container platform
-   **Terraform** - [https://www.terraform.io/](https://www.terraform.io/)  
Write, Plan, and Create Infrastructure as Code. A platform agnostic approach to infrastructure provisionment
-   **Kubernetes** - [https://kubernetes.io/](Orchestration)  
Orchestrating, deploying and scaling out containers
-   **Helm** - [https://kubernetes.io/](Orchestration)  
Similar to [Yarn](https://yarnpkg.com) however Helm is package management
---
[BACK](../README.md)