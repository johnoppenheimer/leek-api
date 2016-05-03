module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        fun: function(callback){
            var options = {}
            options.method = 'GET';
            options.uri = config.uri.RANKING_FUN;

            utils.exec(options, callback);
        },
        get: function(category, order, page, callback){
            var options = {};
            options.category = category;
            options.order = order;
            options.page = page;
            options.method = 'GET';
            options.uri = config.uri.GET_RANKING;

            utils.exec(options, callback);
        },
        getFarmerRank: function(farmerId, order, callback){
            var options = {};
            options.farmer_id = farmerId;
            options.order = order;
            options.method = 'GET';
            options.uri = config.uri.GET_FARMER_RANK;

            utils.exec(options, callback);
        },
        getHomeRank: function(callback){
            var options = {};
            options.method = 'GET';
            options.uri = config.uri.GET_HOME_RANKING;

            utils.exec(options, callback);
        },
        getLeekRank: function(leekId, order, callback){
            var options = {};
            options.leek_id = leekId;
            options.order = order;
            options.method = 'GET';
            options.uri = config.uri.GET_LEEK_RANK;

            utils.exec(options, callback);
        },
        getTeamRank: function(teamId, order, callback){
            var options = {};
            options.team_id = teamId;
            options.order = order;
            options.method = 'GET';
            options.uri = config.uri.GET_TEAM_RANK;

            utils.exec(options, callback);
        },
        search: function(query, inLeeks, inFarmers, inTeams, callback){
            var options = {};
            options.query = query;
            options.search_leeks = inLeeks;
            options.search_farmers = inFarmers;
            options.search_teams = inTeams;
            options.method = 'POST';
            options.uri = config.uri.SEARCH_RANK;

            utils.exec(options, callback);
        }
    }
})();
