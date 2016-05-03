module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        getAll: function(callback){
            var options = {};
            options.method = 'GET';
            options.uri = config.uri.GET_ALL_HAT;

            utils.exec(options, callback);
        },
        getTemplates: function(callback){
            var options = {};
            options.method = 'GET';
            options.uri = config.uri.GET_TEMPLATES_HAT;

            utils.exec(options, callback);
        }
    }
})();
