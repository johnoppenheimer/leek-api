# leek-api
This is a javascript wrapper for the [LeekWars](http://leekwars.com) game API.

[![NPM Version][npm-image]][npm-url]

### Install
`npm install leek-api --save`

### Example
```javascript
var LeekApi = require('leek-api')('<apikey>');

LeekApi.Farmer.login('login', 'password', function(error, response){
    if (err) throw new Error(err);
    console.log(response);
});
```

### TODO
- Write tests
- Write documentation

### LICENSE
MIT

[npm-image]: https://img.shields.io/npm/v/leek-api.svg
[npm-url]: https://npmjs.org/package/leek-api
