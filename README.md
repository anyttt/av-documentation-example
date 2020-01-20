# documentation-example

This project demonstrates the concept of auto-generating documentation from JavaScript code.

- [JSDoc](https://jsdoc.app/index.html) comments are used to describe the code.
- [documentation.js](https://github.com/documentationjs/documentation) is used to automatically generate the documentation.
- Custom template for the generated documentation: ```documentation-theme``` Comments are filtered according to the value of ```@author```. Only the comments with ```@author feature``` are rendered.

## View the generated documentation
Open the ```docs/index.html``` file in the browser.

### Included examples
In ```src/components/Component.vue```:
- ```firstExampleFeature()```
- ```firstExampleMethod()```

In ```src/utils/utils.js```:
- ```secondExampleFeature()```
- ```secondExampleMethod()```


## Project setup
```
npm install
```

## Generate documentation
If you want to try generating documentation, install [documentation.js](https://github.com/documentationjs/documentation).
```
$ npm install -g documentation
```

Generate ```html``` docs for files in ```src``` using the custom template in ```documentation-theme```:
```
documentation build src/** -f html -o docs --theme documentation-theme
```

### Compiles and hot-reloads for development
```
npm run serve
```
