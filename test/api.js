var config = require('./config');
var api = require('../lib/leekapi')(config.token);

module.exports = api;
