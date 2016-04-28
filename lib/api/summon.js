module.exports = (function() {
    'use strict';
    var config = require('../config');
    var utils = require('../utils');
    return {
        getTemplates: function(callback) {
            var options = {};
            options.uri = config.uri.SUMMON_GET_TEMPLATES;
            utils.exec(options, callback);
        }
    }
})();
