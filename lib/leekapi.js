module.exports = function(token){
    var utils = require('./utils');
    utils.setToken(token);

    var api = {};
    api.Changelog = require('./api/changelog');
    api.Ai = require('./api/ai');
    api.Farmer = require('./api/farmer');
    api.Fight = require('./api/fight');
    api.Chip = require('./api/chip');
    api.Constant = require('./api/constant');
    api.Country = require('./api/country');
    api.Function = require('./api/function');
    api.Garden = require('./api/garden');
    api.Hat = require('./api/hat');

    return api;
}
