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
    api.Leek = require('./api/leek');
    api.Market = require('./api/market');
    api.Message = require('./api/message');
    api.Notification = require('./api/notification');
    api.Potion = require('./api/potion');
    api.Ranking = require('./api/ranking');
    api.Service = require('./api/service');

    return api;
}
