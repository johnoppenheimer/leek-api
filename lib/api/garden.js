module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        get: function(callback){
            var options = {}
            options.uri = config.uri.GET_GARDEN;

            utils.exec(options, callback);
        },
        getSoloChallenge: function(leekId, callback){
            var options = {};
            options.leekId = leekId;
            options.uri = config.uri.GET_SOLO_CHALLENGE;

            utils.exec(options, callback);
        },
        startFarmerChallenge: function(targetId, callback){
            var options = {};
            options.targetId = targetId;
            options.uri = config.uri.START_FAMER_CHALLENGE;

            utils.exec(options, callback);
        },
        startFarmerFight: function(targetId, callback){
            var options = {};
            options.targetId = targetId;
            options.uri = config.uri.START_FARMER_FIGHT;

            utils.exec(options, callback);
        },
        startSoloChallenge: function(leekId, targetId, callback){
            var options = {};
            options.leekId = leekId;
            options.targetId = targetId;
            options.uri = config.uri.START_SOLO_CHALLENGE;

            utils.exec(options, callback);
        },
        startSoloFight: function(leekId, targetId, callback){
            var options = {};
            options.leekId = leekId;
            options.targetId = targetId;
            options.uri = config.uri.START_SOLO_FIGTH;

            utils.exec(options, callback);
        },
        startTeamFight: function(compositionId, targetId, callback){
            var options = {};
            options.compositionId = compositionId;
            options.targetId = targetId;
            options.uri = config.uri.START_TEAM_FIGHT;

            utils.exec(options.callback);
        }
    }
})();
