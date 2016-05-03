module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        get: function(fightId, callback){
            var options = {};
            options.fight_id = fightId;
            options.method = 'GET';
            options.uri = config.uri.GET_FIGHT;

            utils.exec(options, callback);
        },
        getLogs: function(fightId, callback){
            var options = {};
            options.fight_id = fightId;
            options.method = 'GET';
            options.uri = config.uri.GET_FIGHT_LOGS;

            utils.exec(options, callback);
        },
        comment: function(fightId, comment, callback){
            var options = {};
            options.fight_id = fightId;
            options.comment = comment;
            options.method = 'POST';
            options.uri = config.uri.COMMENT_FIGHT;

            utils.exec(options, callback);
        }
    };
})();
