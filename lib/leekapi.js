module.exports = function(token){
    var utils = require('./utils');
    utils.setToken(token);

    var api = {};
    api.Changelog = require('./api/changelog');
    api.Ai = require('./api/ai');
}
