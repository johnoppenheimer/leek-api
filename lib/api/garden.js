module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        get: function(callback){
            var options = {}
            options.method = 'GET';
            options.uri = config.uri.GET_GARDEN;

            utils.exec(options, callback);
        },
        getSoloChallenge: function(leekId, callback){
            var options = {};
            options.leek_id = leekId;
            options.method = 'GET';
            options.uri = config.uri.GET_SOLO_CHALLENGE;

            utils.exec(options, callback);
        },
        startFarmerChallenge: function(targetId, callback){
            var options = {};
            options.target_id = targetId;
            options.method = 'POST';
            options.uri = config.uri.START_FAMER_CHALLENGE;

            utils.exec(options, callback);
        },
        startFarmerFight: function(targetId, callback){
            var options = {};
            options.target_id = targetId;
            options.method = 'POST';
            options.uri = config.uri.START_FARMER_FIGHT;

            utils.exec(options, callback);
        },
        startSoloChallenge: function(leekId, targetId, callback){
            var options = {};
            options.leek_id = leekId;
            options.target_id = targetId;
            options.method = 'POST';
            options.uri = config.uri.START_SOLO_CHALLENGE;

            utils.exec(options, callback);
        },
        startSoloFight: function(leekId, targetId, callback){
            var options = {};
            options.leek_id = leekId;
            options.targe_id = targetId;
            options.method = 'POST';
            options.uri = config.uri.START_SOLO_FIGTH;

            utils.exec(options, callback);
        },
        startTeamFight: function(compositionId, targetId, callback){
            var options = {};
            options.composition_id = compositionId;
            options.target_id = targetId;
            options.method = 'POST';
            options.uri = config.uri.START_TEAM_FIGHT;

            utils.exec(options, callback);
        }
    }
})();
