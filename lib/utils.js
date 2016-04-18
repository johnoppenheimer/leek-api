var request = require('request');

module.exports = (function() {
    var utils = {};

    utils.exec = function(options, callback) {
        console.log('exec');
        try {
            options.uri = utils.craftUri(options);
        } catch (error) {
            callback('exect error: ' + error, null);
            return;
        }

        utils.request(options, callback);
    }

    utils.craftUri = function(options) {
        if (!options) {
            throw new Error('Options missing');
        }

        if (!options.uri || typeof options.uri !== 'string') {
            throw new Error('Invalid API URI: ' + options.uri);
        }

        var host = options.host || 'http://leekwars.com/api';
        var uri = host + utils.fillUri(options);

        return uri;
    };

    utils.fillUri = function(options) {
        var pattern = new RegExp('\\{(?:(\\w+):)?(\\w+)\\}', 'gi');
        var result = pattern.exec(options.uri);
        while (result) {
            var needle = result[0];
            var param = result[result.length - 1];

            if (!options[param]) {
                throw new Error('Param ' + param + ' was not provided');
            }
            if (result.length === 3) {
                var type = result[1];
                switch (type) {
                    case 'string':
                        if (typeof options[param] !== 'string' && !utils.isArrayOfStrings(options[param])) {
                            throw new Error('Param ' + param + ' must be string or an array of strings');
                        }
                        break;
                    case 'int':
                        if (!utils.isInteger(options[param]) && !utils.isArrayOfIntegers(options[param])) {
                            throw new Error('Param ' + param + ' must be an integer or an array of integers');
                        }
                        break;
                }
                if (options[param] instanceof Array) {
                    options[param] = options[param].join();
                }
            }
            result = pattern.exec(options.uri);
            options.uri = options.uri.replace(needle, options[param]);
        }

        return options.uri;
    };

    utils.request = function(options, callback) {
        if (!options.uri || typeof options.uri !== 'string') {
            throw new Error('Invalid URI: ' + options.uri);
        }
        if (!callback || typeof callback !== 'function') {
            throw new Error('Invalid callback: ' + callback);
        }
        request(options.uri, callback);

    };

    return utils;
})();
