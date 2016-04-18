module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        get: function(callback){
            var options = {};
            options.lang = 'fr';
            options.uri = config.uri.GET_CHANGELOG;

            utils.exec(options, callback);
        }
    }
})();
