module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        getAll: function(callback){
            var options = {};
            options.uri = config.uri.GET_ALL_FUNCTIONS;

            utils.exec(options, callback);
        },
        getCategories: function(callback){
            var options = {};
            options.uri = config.uri.GET_FUNCTION_CATEGORIES;

            utils.exec(options, callback);
        }
    }
})
