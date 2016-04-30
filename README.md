# leek-api
This is a javscript wrapper for the LeekWars game API [http://leekwars.com](http://leekwars.com).

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
