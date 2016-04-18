var LeekApi = require('./lib/leekapi');

LeekApi.Changelog.get(function(error, response, body) {
    if (!error && response.statusCode == 200) {
        var body = JSON.parse(body);
        var changelogs = body.changelog;
        for (var i = 0; i < changelogs.length; i++) {
            console.log(changelogs[i].date);
        }
    }
    else{
        console.log(error);
    }
});
