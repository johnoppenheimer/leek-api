module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        activate: function(id, code, callback){
            var options = {};
            options.id = id;
            options.code = code;
            options.uri = config.uri.ACTIVATE_FARMER;

            utils.exec(options, callback);
        },
        changeCountry: function(countryCode, callback){
            var options = {};
            options.countryCode = countryCode;
            options.uri = config.uri.CHANGE_COUNTRY_FARMER;

            utils.exec(options, callback);
        },
        changePassword: function(password, callback){
            var options = {};
            options.password = password;
            options.uri = config.uri.CHANGE_PASSWORD_FARMER;

            utils.exec(options, callback);
        },
        disconnect: function(callback){
            var options = {};
            options.uri = config.uri.DISCONNECT_FARMER;

            utils.exec(options, callback);
        },
        get: function(id, callback){
            var options = {};
            options.id = id;
            options.uri = config.uri.GET_FARMER;

            utils.exec(options, callback);
        },
        getConnected: function(callback){
            var options = {};
            options.uri = config.uri.GET_CONNECTED_FARMER;

            utils.exec(options, callback);
        },
        getFromCurrentToken: function(callback){
            var options = {};
            options.uri = config.uri.GET_FROM_TOKEN;

            utils.exec(options, callback);
        },
        login: function(login, password, callback){
            var options = {};
            options.login = login;
            options.password = password;
            options.uri = config.uri.GET_FARMER_TOKEN;

            utils.exec(options, callback);
        },
        register: function(login, password, email, leekName, godfather, callback){
            var options = {};
            options.login = login;
            options.password = password;
            options.email = email;
            options.leekName = leekName;
            options.godfather = godfather;
            options.uri = config.uri.REGISTER_FARMER;

            utils.exec(options, callback);
        },
        registerTournament: function(callback){
            var options = {};
            options.uri = config.uri.REGISTER_TOURNAMENT;

            utils.exec(options, callback);
        },
        setAvatar: function(avatar, callback){
            var options = {};
            options.avatar = avatar;
            options.uri = config.uri.SET_AVATAR_FARMER;

            utils.exec(options, callback);
        },
        unregister: function(password, deleteForumMessage, callback){
            var options = {};
            options.password = password;
            options.deleteForumMessage = deleteForumMessage;
            options.uri = config.uri.UNREGISTER_FARMER;

            utils.exec(options, callback);
        },
        unregisterTournament: function(callback){
            var options = {};
            options.uri = config.uri.UNREGISTER_TOURNAMENT;

            utils.exec(options, callback);
        },
        update: function(callback){
            var options = {};
            options.uri = config.uri.UPDATE_FARMER;

            utils.exec(options, callback);
        }
    }
})();
