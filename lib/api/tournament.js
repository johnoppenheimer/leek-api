module.exports = (function() {
    'use strict';
    var config = require('../config');
    var utils = require('../utils');
    return {
        comment: function(tournamentId, comment, callback) {
            var options = {};
            options.tournament_id = tournamentId;
            options.comment = comment;
            options.method = 'POST';
            options.uri = config.uri.TOURNAMENT_COMMENT;
            utils.exec(options, callback);
        },
        get: function(tournamentId, callback) {
            var options = {};
            options.tournament_id = tournamentId;
            options.method = 'GET';
            options.uri = config.uri.TOURNAMENT_GET;
            utils.exec(options, callback);
        }
    }
})();
