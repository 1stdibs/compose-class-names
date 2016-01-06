## merges two maps of localized css class names via space concatenation
```js`
require('compose-class-names)({
    foo: "asdf"
}, {
    foo: "qwer"
})
```
returns:
```js
{foo: "asdf qwer"}
```
