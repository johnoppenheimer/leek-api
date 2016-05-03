module.exports = (function() {
    'use strict';
    var config = require('../config');
    var utils = require('../utils');
    return {
        acceptCandidacy: function(candidacyId, callback) {
            var options = {};
            options.candidacy_id = candidacyId;
            options.method = 'POST';
            options.uri = config.uri.TEAM_ACCEPT_CANDIDACY;
            utils.exec(options, callback);
        },
        ban: function(farmerId, callback) {
            var options = {};
            options.farmer_id = farmerId;
            options.method = 'POST';
            options.uri = config.uri.TEAM_BAN;
            utils.exec(options, callback);
        },
        cancelCandidacy: function(callback) {
            var options = {};
            options.method = 'POST';
            options.uri = config.uri.TEAM_CANCEL_CANDIDACY;
            utils.exec(options, callback);
        },
        cancelCandidacyForTeam: function(teamId, callback) {
            var options = {};
            options.team_id = teamId;
            options.method = 'POST';
            options.uri = config.uri.TEAM_CANCEL_CANDIDACY_FOR_TEAM;
            utils.exec(options, callback);
        },
        changeDescription: function(description, callback) {
            var options = {};
            options.description = description;
            options.method = 'POST';
            options.uri = config.uri.TEAM_CHANGE_DESCRIPTION;
            utils.exec(options, callback);
        },
        changeMemberGrade: function(farmerId, newGrade, callback) {
            var options = {};
            options.farmer_id = farmerId;
            options.new_grade = newGrade;
            options.method = 'POST';
            options.uri = config.uri.TEAM_CHANGE_MEMBER_GRADE;
            utils.exec(options, callback);
        },
        changeOwner: function(farmerId, password, callback) {
            var options = {};
            options.new_owner = farmerId;
            options.password = password;
            options.method = 'POST';
            options.uri = config.uri.TEAM_CHANGE_OWNER;
            utils.exec(options, callback);
        },
        create: function(teamName, callback) {
            var options = {};
            options.team_name = teamName;
            options.method = 'POST';
            options.uri = config.uri.TEAM_CREATE;
            utils.exec(options, callback);
        },
        createComposition: function(compositionName, callback) {
            var options = {};
            options.composition_name = compositionName;
            options.method = 'POST';
            options.uri = config.uri.TEAM_CREATE_COMPOSITION;
            utils.exec(options, callback);
        },
        deleteComposition: function(compositionId, callback) {
            var options = {};
            options.composition_id = compositionId;
            options.method = 'POST';
            options.uri = config.uri.TEAM_DELETE_COMPOSITION;
            utils.exec(options, callback);
        },
        dissolve: function(callback) {
            var options = {};
            options.method = 'POST';
            options.uri = config.uri.TEAM_DISSOLVE;
            utils.exec(options, callback);
        },
        get: function(teamId, callback) {
            var options = {};
            options.team_id = teamId;
            options.method = 'GET';
            options.uri = config.uri.TEAM_GET;
            utils.exec(options, callback);
        },
        getConnected: function(teamId, callback) {
            var options = {};
            options.team_id = teamId;
            options.method = 'GET';
            options.uri = config.uri.TEAM_GET_CONNECTED;
            utils.exec(options, callback);
        },
        getPrivate: function(teamId, callback) {
            var options = {};
            options.team_id = teamId;
            options.method = 'GET';
            options.uri = config.uri.TEAM_GET_PRIVATE;
            utils.exec(options, callback);
        },
        moveLeek: function(leekId, compositionId, callback) {
            var options = {};
            options.leek_id = leekId;
            options.composition_id = compositionId;
            options.method = 'POST';
            options.uri = config.uri.TEAM_MOVE_LEEK;
            utils.exec(options, callback);
        },
        quit: function(callback) {
            var options = {};
            options.method = 'POST';
            options.uri = config.uri.TEAM_QUIT;
            utils.exec(options, callback);
        },
        registerTournament: function(compositionId, callback) {
            var options = {};
            options.composition_id = compositionId;
            options.method = 'POST';
            options.uri = config.uri.TEAM_REGISTER_TOURNAMENT;
            utils.exec(options, callback);
        },
        rejectCandidacy: function(candidacyId, callback) {
            var options = {};
            options.candidacy_id = candidacyId;
            options.method = 'POST';
            options.uri = config.uri.TEAM_REJECT_CANDIDACY;
            utils.exec(options, callback);
        },
        sendCandidacy: function(teamId, callback) {
            var options = {};
            options.team_id = teamId;
            options.method = 'POST';
            options.uri = config.uri.TEAM_SEND_CANDIDACY;
            utils.exec(options, callback);
        },
        setEmblem: function(teamId, emblem, callback) {
            var options = {};
            options.team_id = teamId;
            options.emblem = emblem;
            options.uri = config.uri.TEAM_SET_EMBLEM;
            utils.exec(options, callback);
        },
        setOpened: function(opened, callback) {
            var options = {};
            options.opened = opened;
            options.method = 'POST';
            options.uri = config.uri.TEAM_SET_OPENED;
            utils.exec(options, callback);
        },
        unregisterTournament: function(compositionId, callback) {
            var options = {};
            options.composition_id = compositionId;
            options.method = 'POST';
            options.uri = config.uri.TEAM_UNREGISTER_TOURNAMENT;
            utils.exec(options, callback);
        }
    }
})();
