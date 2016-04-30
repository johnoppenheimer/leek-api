module.exports = (function() {
    'use strict';
    var config = require('../config');
    var utils = require('../utils');
    return {
        getAdmin: function(lang, supertoken, callback) {
            var options = {};
            options.lang = lang;
            options.supertoken = supertoken;
            options.uri = config.uri.TROPHY_GET_ADMIN;
            utils.exec(options, callback);
        },
        getAll: function(callback) {
            var options = {};
            options.uri = config.uri.TROPHY_GET_ALL;
            utils.exec(options, callback);
        },
        getCategories: function(callback) {
            var options = {};
            options.uri = config.uri.TROPHY_GET_CATEGORIES;
            utils.exec(options, callback);
        },
        getFarmerTrophies: function(farmerId, lang, callback) {
            var options = {};
            options.farmerId = farmerId;
            options.lang = lang;
            options.uri = config.uri.TROPHY_GET_FARMER_TROPHIES;
            utils.exec(options, callback);
        },
        unlock: function(trophyId, callback) {
            var options = {};
            options.trophyId = trophyId;
            options.uri = config.uri.TROPHY_UNLOCK;
            utils.exec(options, callback);
        }
    }
})();
