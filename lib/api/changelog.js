module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        get: function(lang, callback){
            var options = {};
            options.lang = lang;
            options.method = 'GET';
            options.uri = config.uri.GET_CHANGELOG;

            utils.exec(options, callback);
        },
        getLast: function(lang, callback){
            var options = {};
            options.lang = lang;
            options.method = 'GET';
            options.uri = config.uri.LAST_CHANGELOG;

            utils.exec(options, callback);
        }
    }
})();
