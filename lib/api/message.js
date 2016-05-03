module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        createConversation: function(farmerId, message, callback){
            var options = {}
            options.farmer_id = farmerId;
            options.message = message;
            options.method = 'POST';
            options.uri = config.uri.CREATE_CONVERSATION;

            utils.exec(options, callback);
        },
        getLatestConversations: function(count, callback){
            var options = {};
            options.count = count;
            options.method = 'GET';
            options.uri = config.uri.GET_LATEST_CONVERSATIONS;

            utils.exec(options, callback);
        },
        getMessages: function(conversationId, count, page, callback){
            var options = {};
            options.conversation_id = conversationId;
            options.count = count;
            options.page = page;
            options.method = 'GET';
            options.uri = config.uri.GET_MESSAGES;

            utils.exec(options, callback);
        },
        quitConversation: function(conversationId, callback){
            var options = {};
            options.conversation_id = conversationId;
            options.method = 'POST';
            options.uri = config.uri.QUIT_CONVERSATION;

            utils.exec(options, callback);
        },
        sendMessage: function(conversationId, message, callback){
            var options = {};
            options.conversation_id = conversationId;
            options.message = message;
            options.method = 'POST';
            options.uri = config.uri.SEND_MESSAGE;

            utils.exec(options, callback);
        }
    }
})();
