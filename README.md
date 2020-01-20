# documentation-example

This project demonstrates the concept of auto-generating documentation from JavaScript code.

- [JSDoc](https://jsdoc.app/index.html) comments are used to describe the code.
- [documentation.js](https://github.com/documentationjs/documentation) is used to automatically generate the documentation.
- ```@ignore``` is added to those JSDoc comments that should be omitted from the documentation.

## View the generated documentation
Open the ```docs/index.html``` file in the browser.

### Included examples
In ```src/components/Component.vue```:
- ```documentedMethod()```
- ```undocumentedMethod()```

In ```src/utils/utils.js```:
- ```documentedFunction()```
- ```undocumentedFunction()```

## Project setup
```
npm install
```

## Generate documentation
If you want to try generating documentation, install [documentation.js](https://github.com/documentationjs/documentation).
```
$ npm install -g documentation
```

Generate html docs for files in src:
```
documentation build src/** -f html -o docs
```

### Compiles and hot-reloads for development
```
npm run serve
```
