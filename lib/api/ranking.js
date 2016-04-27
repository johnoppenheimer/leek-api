module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        fun: function(callback){
            var options = {}
            options.uri = config.uri.RANKING_FUN;

            utils.exec(options, callback);
        },
        get: function(category, order, page, callback){
            var options = {};
            options.category = category;
            options.order = order;
            options.page = page;
            options.uri = config.uri.GET_RANKING;

            utils.exec(options, callback);
        },
        getFarmerRank: function(farmerId, order, callback){
            var options = {};
            options.farmerId = farmerId;
            options.order = order;
            options.uri = GET_FARMER_RANK;

            utils.exec(options, callback);
        },
        getHomeRank: function(callback){
            var options = {};
            options.uri = config.uri.GET_HOME_RANKING;

            utils.exec(options, callback);
        },
        getLeekRank: function(leekId, order, callback){
            var options = {};
            options.leekId = leekId;
            options.order = order;
            options.uri = config.uri.GET_LEEK_RANK;

            utils.exec(options, callback);
        },
        getTeamRank: function(teamId, order, callback){
            var options = {};
            options.teamId = teamId;
            options.order = order;
            options.uri = config.uri.GET_TEAM_RANK;

            utils.exec(options, callback);
        },
        search: function(query, inLeeks, inFarmers, inTeams, callback){
            var options = {};
            options.query = query;
            options.leeks = inLeeks;
            options.farmers = inFarmers;
            options.teams = inTeams;
            options.uri = config.uri.SEARCH_RANK;

            utils.exec(options, callback);
        }
    }
})();
