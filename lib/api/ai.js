module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        get: function(aiId, callback){
            var options = {};
            options.id = aiId;
            options.method = 'GET';
            options.uri = config.uri.GET_AI;

            utils.exec(options, callback);
        },
        delete: function(aiId, callback){
            var options = {};
            options.id = aiId;
            options.method = 'POST';
            options.uri = config.uri.DELETE_AI;

            utils.exec(options, callback);
        },
        getMyAis: function(callback){
            var options = {};
            options.method = 'GET';
            options.uri = config.uri.GET_FARMERS_AIS;

            utils.exec(options, callback);
        },
        new: function(callback){
            var options = {};
            options.method = 'POST';
            options.uri = config.uri.NEW_AI;

            utils.exec(options, callback);
        },
        rename: function(id, name, callback){
            var options = {};
            options.method = 'POST';
            options.id = id;
            options.name = name;
            options.uri = config.uri.RENAME_AI;

            utils.exec(options, callback);
        },
        save: function(id, code, callback){
            var options = {};
            options.id = id;
            options.code = code;
            options.method = 'POST';
            options.uri = config.uri.SAVE_AI;

            utils.exec(options, callback);
        },
        test: function(id, leekId, bots, type, callback){
            var options = {};
            options.id = id;
            options.leek_id = leekId;
            options.bots = bots;
            options.type = type;
            options.method = 'POST';
            options.uri = config.uri.TEST_AI;

            utils.exec(options, callback);
        }
    }
})();
