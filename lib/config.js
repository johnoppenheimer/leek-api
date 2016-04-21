module.exports = {
    uri: {
        //AI
        GET_AI : '/ai/get/{int:id}/{string:token}',
        DELETE_AI : '/ai/delete/{int:id}/{string:token}',
        GET_FARMERS_AIS : '/ai/get-farmer-ais/{string:token}',
        NEW_AI : '/ai/new/{string:token}',
        RENAME_AI : '/ai/rename/{int:id}/{string:name}/{string:token}',
        SAVE_AI : '/ai/save/{int:id}/{string:code}/{string:token}',
        TEST_AI : '/ai/test/{int:id}/{int:leekId}/{string:bots}/{string:type}/{string:token}',
        //CHANGELOG
        GET_CHANGELOG : '/changelog/get/{string:lang}',
        LAST_CHANGELOG : '/changelog/get-last/{string:lang}',
        //CHIP
        GET_ALL_CHIP : '/chip/get-all',
        GET_TEMPLATES_CHIP : '/chip/get-templates',
        //CONSTANT
        GET_ALL_CONSTANT : '/constant/get-all',
        //COUNTRY
        GET_COUNTRY : '/country/get-all',
        //FARMER
        ACTIVATE_FARMER : '/farmer/activate/{int:id}/{string:code}',
        CHANGE_COUNTRY_FARMER : '/farmer/change-country/{string:countryCode}/{string:token}',
        CHANGE_PASSWORD_FARMER : '/farmer/change-password/{string:password}/{string:token}',
        DISCONNECT_FARMER : '/farmer/disconnect/{string:token}',
        GET_FARMER : '/farmer/get/{int:id}',
        GET_CONNECTED_FARMER : '/farmer/get-connected',
        GET_FROM_TOKEN : '/farmer/get-from-token/{string:token}',
        GET_FARMER_TOKEN : '/farmer/login-token/{string:login}/{string:password}',
        REGISTER_FARMER : '/farmer/register/{string:login}/{string:password}/{string:email}/{string:leekName}/{string:godfather}',
        REGISTER_TOURNAMENT : '/farmer/register-tournament/{string:token}',
        SET_AVATAR_FARMER : '/farmer/set-avatar/{file:avatar}/{string:token}',
        UNREGISTER_FARMER : '/farmer/unregister/{string:password}/{booleen:deleteForumMessage}/{string:token}',
        UNREGISTER_TOURNAMENT : '/farmer/unregister-tournament/{string:token}',
        UPDATE_FARMER : '/farmer/update/{string:token}',
        //FIGHT
        COMMENT_FIGHT : '/fight/comment/{int:id}/{string:comment}/{string:token}',
        GET_FIGHT : '/fight/get/{int:id}',
        GET_FIGHT_LOGS : '/fight/get-logs/{int:id}/{string:token}',
        //FUNCTION
        GET_ALL_FUNCTIONS : '/function/get-all',
        GET_FUNCTION_CATEGORIES : '/function/get-categories',
        //GARDEN
        GET_GARDEN : '/garden/get/{string:token}',
        GET_SOLO_CHALLENGE : '/garden/get-solo-challenge/{int:leekId}/{string:token}',
        START_FAMER_CHALLENGE: '/garden/start-farmer-challenge/{int:targetId}/{string:token}',
        START_FARMER_FIGHT: '/garden/start-farmer-fight/{int:targetId}/{string:token}',
        START_SOLO_CHALLENGE: '/garden/start-solo-challenge/{int:leekId}/{int:targetId}/{string:token}',
        START_SOLO_FIGTH: '/garden/start-solo-fight/{int:leekId}/{int:targetId}/{string:token}',
        START_TEAM_FIGHT: '/garden/start-team-fight/{int:compositionId}/{int:targetId}/{string:token}',
        //HAT
        GET_ALL_HAT: '/hat/get-all',
        GET_TEMPLATES_HAT: '/hat/get-templates',
        //LEEK
        LEEK_ADD_CHIP: '/leek/add-chip/{int:leekId}/{int:chipId}/{string:token}',
        LEEK_ADD_WEAPON: '/leek/add-weapon/{int:leekId}/{int:weapon}/{string:token}',
        LEEK_CREATE: '/leek/create/{string:name}/{string:token}',
        LEEK_DELETE_REGISTER: '/leek/delete-register/{int:leekId}/{string:key}/{string:token}',
        GET_LEEK: '/leek/get/{int:leekId}',
        COUNT_LEEK: '/leek/get-count',
        LEEK_GET_IMAGE: '/leek/get-image/{int:leekId}/{int:scale}',
        LEEK_GET_LEVEL_POPUP: '/leek/get-level-popup/{int:leekId}/{string:token}',
        LEEK_GET_NEXT_PRICE: '/leek/get-next-price/{string:token}',
        LEEK_GET_PRIVATE: '/leek/get-private/{int:leekId}/{string:token}',
        LEEK_GET_REGISTERS: '/leek/get-registers/{int:leekId}/{string:token}',
        LEEK_REGISTER_TOURNAMENT: '/leek/register-tournament/{int:leekId}/{string:token}',
        LEEK_REMOVE_AI: '/leek/remove-ai/{int:leekId}/{string:token}',
        LEEK_REMOVE_CHIP: '/leek/remove-chip/{int:chipId}/{string:token}',//this request is deepshit
        LEEK_REMOVE_HAT: '/leek/remove-hat/{int:leekId}/{string:token}',
        LEEK_REMOVE_WEAPON: '/leek/remove-weapon/{int:weaponId}/{string:token}',//this one also
        LEEK_RENAME_CRYSTALS: '/leek/rename-crystals/{int:leekId}/{string:newName}/{string:token}',
        LEEK_RENAME_HABS: '/leek/rename-habs/{int:leekId}/{string:newName}/{string:token}',
        LEEK_SET_AI: '/leek/set-ai/{int:leekId}/{int:aiId}/{string:token}',
        LEEK_SET_HAT: '/leek/set-hat/{int:leekId}/{int:hatId}/{string:token}',
        LEEK_SET_IN_GARDEN: '/leek/set-in-garden/{int:leekId}/{bool:inGarden}/{string:token}',
        LEEK_SET_POPUP_LEVEL_SEEN: '/leek/set-popup-level-seen/{int:leekId}/{string:token}',
        LEEK_SET_REGISTER: '/leek/set-register/{int:leekId}/{string:key}/{string:value}/{string:token}',
        LEEK_SPEND_CAPITAL: '/leek/spend-capital/{int:leekId}/{json:characteristics}/{string:token}',
        LEEK_UNREGISTER_TOURNAMENT: '/leek/unregister-tournament/{int:leekId}/{string:token}',
        LEEK_USE_POTION: '/leek/use-potion/{int:leekId}/{int:potionId}/{string:token}',
        //MARKET
        BUY_CRYSTALS: '/market/buy-crystals/{int:itemId}/{string:token}',
        BUY_HABS: '/market/buy-habs/{int:itemId}/{string:token}',
        GET_ITEM_TEMPLATES: '/market/get-item-templates/{string:token}',
        SELL_HABS: '/market/sell-habs/{int:itemId}/{string:token}',
        //MESSAGE
        CREATE_CONVERSATION: '/message/create-conversation/{int:farmerId}/{string:message}/{string:token}',
        GET_LATEST_CONVERSATIONS: '/message/get-latest-conversations/{int:count}/{string:token}',
        GET_MESSAGES: '/message/get-messages/{int:conversationId}/{int:count}/{int:page}/{string:token}',
        QUIT_CONVERSATION: '/message/quit-conversation/{int:conversationId}/{string:token}',
        SEND_MESSAGE: '/message/send-message/{int:conversationId}/{string:message}/{string:token}',
        //NOTIFICATIONS
        GET_LATEST_NOTIFICATIONS: '/notification/get-latest/{int:count}/{string:token}',
        READ_ALL_NOTIFICATIONS: '/notification/read-all/{string:token}',
        //POTION
        GET_ALL_POTIONS: '/potion/get-all'
    }
}
