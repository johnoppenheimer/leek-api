module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        getAll: function(count, callback){
            var options = {}
            options.uri = config.uri.GET_ALL_POTIONS;

            utils.exec(options, callback);
        }
    }
})();
