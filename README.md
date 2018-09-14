# React Prime
[![Build Status](https://travis-ci.org/sandervspl/react-prime-after.svg?branch=master)](https://travis-ci.org/sandervspl/react-prime-after)
[![dependencies Status](https://david-dm.org/sandervspl/react-prime-after.svg)](https://david-dm.org/sandervspl/react-prime-after.svg)
[![devDependencies Status](https://david-dm.org/sandervspl/react-prime-after/dev-status.svg)](https://david-dm.org/sandervspl/react-prime-after?type=dev)
[![GitHub release](https://img.shields.io/github/release/sandervspl/react-prime-after.svg)](https://github.com/sandervspl/react-prime-after)

---

## Getting Started
`$ git clone https://github.com/sandervspl/react-prime-after`

`$ cd react-prime-after && npm install`

`$ npm start` (run in development mode)

## Features
* [Server Side Rendering](https://github.com/jaredpalmer/after.js) with AfterJS
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/rackt/redux)
* [Redux Thunk](https://github.com/gaearon/redux-thunk) to handle async actions
* [React Router](https://github.com/rackt/react-router)
* [Express](http://expressjs.com)
* [Babel](http://babeljs.io) for ES6 and ES7
* [Webpack](http://webpack.github.io) for bundling
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) for next generation DX (developer experience).
* [ESLint](http://eslint.org) to maintain a consistent code style
* [Styled-Components](https://www.styled-components.com)
* Refer to `package.json` for more details

## NPM Scripts
* Start develop server: `$ npm start`
* Create production build: `$ npm run build`
* Start server: `$ npm run server`
* Run ESLint: `$ npm run lint`

## Deployment
Make sure all modules are installed:  
`$ npm install`

Create a build for production, this will add a `/build` folder to the root with all bundles.  
`$ npm run build`

Run the server file to start server:  
`$ npm run server`

## Development Workflow
### Routes
Routes are created in `src/app/routes`. Routes can be loaded asynchronously with the `asyncComponent` function. It accepts an object `{ loader, placeholder }` where both properties expect a function that returns a component.

### Components
The components are separated in `Modules` and `Common`. Modules are bundled components which depend on each other. Common components are components that are self-contained and can be used through the entire app.

### Ducks
This boilerplate uses the [Ducks](https://github.com/erikras/ducks-modular-redux) pattern for Redux, that means that the actionTypes, actions and reducers are bundled together in an isolated module.

### Redux DevTools
To use de Redux DevTools install the [Redux DevTools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) from the chrome webstore.

## Roadmap
TODO
