module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        createConversation: function(farmerId, message, callback){
            var options = {}
            options.farmerId = farmerId;
            options.message = message;
            options.uri = config.uri.CREATE_CONVERSATION;

            utils.exec(options, callback);
        },
        getLastConversations: function(count, callback){
            var options = {};
            options.count = count;
            options.uri = config.uri.GET_LAST_CONVERSATIONS;

            utils.exec(options, callback);
        },
        getMessages: function(conversationId, count, page, callback){
            var options = {};
            options.conversationId = conversationId;
            options.count = count;
            options.page = page;
            options.uri = config.uri.GET_MESSAGES;

            utils.exec(options, callback);
        },
        quitConversation: function(conversationId, callback){
            var options = {};
            options.conversationId = conversationId;
            options.uri = config.uri.QUIT_CONVERSATION;

            utils.exec(options, callback);
        },
        sendMessage: function(conversationId, message, callback){
            var options = {};
            options.conversationId = conversationId;
            options.message = message;
            options.uri = config.uri.SEND_MESSAGE;

            utils.exec(options, callback);
        }
    }
})();
