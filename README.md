# Warren Transactions &middot; [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

Solution for Warren's front-end challenge.

## Project setup

### Installing / Getting started

To run this project locally on your machine, you just need to follow these two steps:

```shell
npm i
npm run serve
```

After installing the dependencies, node will start a local server on port 8080 and watch for changes. You can now access this application on your browser, at localhost:8080

Alternatively, you can access the deployed version of this project at https://warren-transactions.herokuapp.com/

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Developing

### Built With
This application use Vue.js as framework.

## Tests

To test the application, simply run:

```shell
npm run test
```

## Style guide

This is a short application, so the style organization is very simple. Bigger components like dropdowns and modals are declared in separated files (in the *components* folder), design system items like typography and icons are also in separated files (in the *shared* folder). The rest of the css is grouped in the base.pcss file, as well as the import for all the others .pcss files. 
