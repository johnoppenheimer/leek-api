module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        get: function(id, callback){
            var options = {};
            options.id = id;
            options.uri = config.uri.GET_FIGHT;

            utils.exec(options, callback);
        },
        getLogs: function(id, callback){
            var options = {};
            options.id = id;
            options.uri = config.uri.GET_FIGHT_LOGS;

            utils.exec(options, callback);
        },
        comment: function(id, comment, callback){
            var options = {};
            options.id = id;
            options.comment = comment;
            options.uri = config.uri.COMMENT_FIGHT;

            utils.exec(options, callback);
        }
    };
})();
