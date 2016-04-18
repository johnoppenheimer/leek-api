module.exports = function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        get: function(aiId, token){
            var options = {};
            options.id = aiId;
            options.token = token;
            options.uri = config.uri.GET_AI;

            utils.exec(options, callback);
        },
        delete: function(aiId, token){
            var options = {};
            options.aiId = aiId;
            options.token = token;

            utils.exec(options, callback);
        }
    }
}
