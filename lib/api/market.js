module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        buyCrystals: function(itemId, callback){
            var options = {}
            options.item_id = itemId;
            options.method = 'POST';
            options.uri = config.uri.BUY_CRYSTALS;

            utils.exec(options, callback);
        },
        buyHabs: function(itemId, callback){
            var options = {};
            options.item_id = itemId;
            options.method = 'POST';
            options.uri = config.uri.BUY_HABS;

            utils.exec(options, callback);
        },
        getItemTemplates: function(callback){
            var options = {};
            options.method = 'GET';
            options.uri = config.uri.GET_ITEM_TEMPLATES;

            utils.exec(options, callback);
        },
        sellHabs: function(itemId, callback){
            var options = {};
            options.item_id = itemId;
            options.method = 'POST';
            options.uri = config.uri.SELL_HABS;

            utils.exec(options, callback);
        }
    }
})();
