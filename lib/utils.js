var request = require('request');

module.exports = (function() {

    var _token = null;
    var config = require('./config');
    var utils = {};

    utils.setToken = function(token) {
        if (!token || typeof token !== 'string') {
            throw new Error('Invalide token: ' + token);
        }
        _token = token;
    }

    utils.isInteger = function(value) {
        return +value === (value | 0);
    };

    utils.isArrayOfIntegers = function(array) {
        if (!(array instanceof Array) || array.length === 0) return false;
        array.forEach(function(value) {
            if (!util.isInteger(value)) return false;
        });
        return true;
    };

    utils.isArrayOfStrings = function(array) {
        if (!(array instanceof Array) || array.length === 0) return false;
        array.forEach(function(value) {
            if (typeof value !== 'string') return false;
        });
        return true;
    }

    utils.exec = function(options, callback) {
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

        options.token = _token;
        var host = options.host || 'http://leekwars.com/api';
        var uri = host + utils.fillUri(options);

        return uri;
    };

    utils.fillUri = function(options) {
        var pattern = new RegExp('\\{(?:(\\w+):)?(\\w+)\\}', 'gi');
        var copyURI = JSON.parse(JSON.stringify(options.uri));
        var result;
        while ((result = pattern.exec(copyURI)) !== null) {
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

        request(options.uri, function(err, response, body){
            if (reqIsGetImage(options)){
                var urls = extractURLs(body);
                callback(err, urls[0]);
            }
            else{
                callback(err, JSON.parse(body));
            }
        });

    };

    function reqIsGetImage(options){
        var copyOptions = JSON.parse(JSON.stringify(options));
        copyOptions.uri = config.uri.LEEK_GET_IMAGE;
        copyOptions.uri = utils.fillUri(options);
        return options.uri === copyOptions.uri;
    }

    function extractURLs(string){
        var pattern = new RegExp('[-a-zA-Z0-9@:%_\\+.~#?&//=]{2,256}\\.[a-z]{2,4}\\b(\/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?', 'gi');
        var urls = [];
        var result;
        while ((result = pattern.exec(string))) {
            urls.push(result[0]);
        }
        return urls;
    }

    return utils;
})();
