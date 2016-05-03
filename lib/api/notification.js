module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        getLatest: function(count, callback){
            var options = {}
            options.count = count;
            options.method = 'GET';
            options.uri = config.uri.GET_LATEST_NOTIFICATIONS;

            utils.exec(options, callback);
        },
        readAll: function(callback){
            var options = {};
            options.method = 'POST';
            options.uri = config.uri.READ_ALL_NOTIFICATIONS;

            utils.exec(options, callback);
        }
    }
})();
