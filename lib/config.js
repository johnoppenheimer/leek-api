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
        GET_FIGHT_LOGS : '/fight/get-logs/{int:id}/{string:token}'
    }
}
