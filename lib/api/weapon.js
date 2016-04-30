module.exports = (function() {
    'use strict';
    var config = require('../config');
    var utils = require('../utils');
    return {
        getAll: function(callback) {
            var options = {};
            options.uri = config.uri.WEAPON_GET_ALL;
            utils.exec(options, callback);
        },
        getTemplates: function(callback) {
            var options = {};
            options.uri = config.uri.WEAPON_GET_TEMPLATES;
            utils.exec(options, callback);
        }
    }
})();
