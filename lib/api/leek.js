module.exports = (function(){
    'use strict';

    var config = require('../config');
    var utils = require('../utils');

    return {
        addChip: function(leekId, chipId, callback){
            var options = {};
            options.leek_id = leekId;
            options.chip_id = chipId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_ADD_CHIP;

            utils.exec(options, callback);
        },
        addWeapon: function(leekId, weaponId, callback){
            var options = {};
            options.leek_id = leekId;
            options.weapon_id = weaponId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_ADD_WEAPON;

            utils.exec(options, callback);
        },
        create: function(name, callback){
            var options = {};
            options.name = name;
            options.method = 'POST';
            options.uri = config.uri.LEEK_CREATE;

            utils.exec(options, callback);
        },
        deleteRegister: function(leekId, key, callback){
            var options = {};
            options.leek_id = leekId;
            options.key = key;
            options.method = 'POST';
            options.uri = config.uri.LEEK_DELETE_REGISTER;

            utils.exec(options, callback);
        },
        get: function(leekId, callback){
            var options = {};
            options.leek_id = leekId;
            options.method = 'GET';
            options.uri = config.uri.GET_LEEK;

            utils.exec(options, callback);
        },
        count: function(callback){
            var options = {};
            options.method = 'GET';
            options.uri = config.uri.COUNT_LEEK;

            utils.exec(options, callback);
        },
        getImage: function(leekId, scale, callback){
            var options = {};
            options.leek_id = leekId;
            options.scale = scale;
            options.method = 'GET';
            options.uri = config.uri.LEEK_GET_IMAGE;

            utils.exec(options, callback);
        },
        getLevelPopup: function(leekId, callback){
            var options = {};
            options.leek_id = leekId;
            options.method = 'GET';
            options.uri = config.uri.LEEK_GET_LEVEL_POPUP;

            utils.exec(options, callback);
        },
        getNextPrice: function(callback){
            var options = {};
            options.method = 'GET';
            options.uri = config.uri.LEEK_GET_NEXT_PRICE;

            utils.exec(options, callback);
        },
        getPrivate: function(leekId, callback){
            var options = {};
            options.leek_id = leekId;
            options.method = 'GET';
            options.uri = config.uri.LEEK_GET_PRIVATE;

            utils.exec(options, callback);
        },
        getRegisters: function(leekId, callback){
            var options = {};
            options.leek_id = leekId;
            options.method = 'GET';
            options.uri = config.uri.LEEK_GET_REGISTERS;

            utils.exec(options, callback);
        },
        registerTournament: function(leekId, callback){
            var options = {};
            options.leek_id = leekId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_REGISTER_TOURNAMENT;

            utils.exec(options, callback);
        },
        removeAi: function(leekId, callback){
            var options = {};
            options.leek_id = leekId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_REMOVE_AI;

            utils.exec(options, callback);
        },
        removeChip: function(chipId, callback){
            var options = {};
            options.chip_id = chipId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_REMOVE_CHIP;

            utils.exec(options, callback);
        },
        removeHat: function(leekId, callback){
            var options = {};
            options.leek_id = leekId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_REMOVE_HAT;

            utils.exec(options, callback);
        },
        removeWeapon: function(weaponId, callback){
            var options = {};
            options.weapon_id = weaponId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_REMOVE_WEAPON;

            utils.exec(options, callback);
        },
        renameCrystals: function(leekId, newName, callback){
            var options = {};
            options.leek_id = leekId;
            options.new_name = newName;
            options.method = 'POST';
            options.uri = config.uri.LEEK_RENAME_CRYSTALS;

            utils.exec(options, callback);
        },
        renameHabs: function(leekId, newName, callback){
            var options = {};
            options.leek_id = leekId;
            options.new_name = newName;
            options.method = 'POST';
            options.uri = config.uri.LEEK_RENAME_HABS;

            utils.exec(options, callback);
        },
        setAi: function(leekId, aiId, callback){
            var options = {};
            options.leek_id = leekId;
            options.ai_id = aiId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_SET_AI;

            utils.exec(options, callback);
        },
        setHat: function(leekId, hatId, callback){
            var options = {};
            options.leek_id = leekId;
            options.hat_id = hatId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_SET_HAT;

            utils.exec(options, callback);
        },
        setInGarden: function(leekId, inGarden, callback){
            var options = {};
            options.leek_id = leekId;
            options.in_garden = inGarden;
            options.method = 'POST';
            options.uri = config.uri.LEEK_SET_IN_GARDEN;

            utils.exec(options, callback);
        },
        setPopupLevelSeen: function(leekId, callback){
            var options = {};
            options.leek_id = leekId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_SET_POPUP_LEVEL_SEEN;

            utils.exec(options, callback);
        },
        setRegister: function(leekId, key, value, callback){
            var options = {};
            options.leek_id = leekId;
            options.key = key;
            options.value = value;
            options.method = 'POST';
            options.uri = config.uri.LEEK_SET_REGISTER;

            utils.exec(options, callback);
        },
        spendCapital: function(leekId, characteristics, callback){
            var options = {};
            options.leek_id = leekId;
            options.characteristics = characteristics;
            options.method = 'POST';
            options.uri = config.uri.LEEK_SPEND_CAPITAL;

            utils.exec(options, callback);
        },
        unregisterTournament: function(leekId, callback){
            var options = {};
            options.leek_id = leekId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_UNREGISTER_TOURNAMENT;

            utils.exec(options, callback);
        },
        usePotion: function(leekId, potionId, callback){
            var options = {};
            options.leek_id = leekId;
            options.potionId = potionId;
            options.method = 'POST';
            options.uri = config.uri.LEEK_USE_POTION;

            utils.exec(options, callback);
        }
    }
})();
