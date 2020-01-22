# documentation-example

This project demonstrates the concept of auto-generating documentation from JavaScript code.

- [JSDoc](https://jsdoc.app/index.html) comments are used to describe the code.
- ```@namespace``` and ```@memberof``` is used to classify comments in the output. Namespaces are defined in [virtual comments](https://jsdoc.app/tags-namespace.html) in the ```src/utils/jsdocNamespaces.js``` file.
- Custom tag ```@feature``` is added in ```documentation/plugins/tags.js``` to enable marking features and adding their titles.
- See examples of jsDoc comments in ```src/main.js``` (Vue object), ```src/exampleClass.js``` (class) a ```src/utils/utils.js``` (functions).

## View the generated documentation
Open the ```out/index.html``` file in the browser.
- example features: FEATURES / ConfirmOrderPage
- example dev documentation: DEV / Dev
- example classes documentation: CLASSES / CookieStorage

## Generate documentation
```
npm run doc
```