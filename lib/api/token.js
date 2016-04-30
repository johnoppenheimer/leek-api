module.exports = (function() {
    'use strict';
    var config = require('../config');
    var utils = require('../utils');
    return {
        check: function(callback) {
            var options = {};
            options.uri = config.uri.TOKEN_CHECK;
            utils.exec(options, callback);
        }
    }
})();
