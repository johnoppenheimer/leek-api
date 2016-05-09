# leek-api
This is a javascript wrapper for the [LeekWars](http://leekwars.com) game API.

[![NPM Version][npm-image]][npm-url]

### Install
`npm install leek-api --save`

### Example
```javascript
var LeekApi = require('leek-api')('<apikey>');

LeekApi.Farmer.login('login', 'password', function(error, response){
    if (err) throw new Error(err);
    console.log(response);
});
```

### Documentation
```javascript
//AI
LeekApi.Ai.get(aiId, callback);
LeekApi.Ai.delete(aiId, callback);
LeekAPi.Ai.getMyAis(callback);
LeekApi.Ai.new(callback);
LeekApi.Ai.rename(aiId, newName, callback);
LeekApi.Ai.save(aiId, ai_filename, callback);
LeekApi.Ai.test(aiId, leekId, bots, type, callback);

//CHANGELOG
LeekApi.Changelog.get(lang, callback);
LeekApi.Changelog.getLast(lang, callback);

//CHIP
LeekApi.Chip.getAll(callback);
LeekApi.Chip.getTemplates(callback);

//CONSTANT
LeekApi.Constant.getAll(callback);

//COUNTRY
LeekApi.Country.getAll(callback);

//FARMER
LeekApi.Farmer.activate(leekId, code, callback);
LeekApi.Farmer.changeCountry(countryCode, callback);
LeekApi.Farmer.changePassword(password, callback);
LeekApi.Farmer.disconnect(callback);
LeekApi.Farmer.get(farmerId, callback);
LeekApi.Farmer.getConnected(callback);
LeekApi.Farmer.getFromCurrentToken(callback);
LeekApi.Farmer.login(login, password, callback);
LeekApi.Farmer.register(login, password, email, leekName, godfather, callback);
LeekApi.Farmer.registerTournament(callback);
LeekApi.Farmer.setAvatar(filename, callback);
LeekApi.Farmer.unregister(password, deleteForumMessage, callback);
LeekApi.Farmer.unregisterTournament(callback);
LeekApi.Farmer.update(callback);

//FIGHT
LeekApi.Fight.get(fightId, callback);
LeekApi.Fight.getLogs(fightId, callback);
LeekApi.Fight.comment(fightId, comment, callback);

//FUNCTION
LeekApi.Function.getAll(callback);
LeekApi.Function.getCategories(callback);

//GARDEN
LeekApi.Garden.get(callback);
LeekApi.Garden.getSoloChallenge(leekId, callback);
LeekApi.Garden.startFarmerChallenge(targetId, callback);
LeekApi.Garden.startFarmerFight(targetId, callback);
LeekApi.Garden.startSoloChallenge(leekId, targetId, callback);
LeekApi.Garden.startSoloFight(leekId, targetId, callback);
LeekApi.Garden.startTeamFight(compositionId, targetId, callback);

//HAT
LeekApi.Hat.getAll(callback);
LeekApi.Hat.getTemplates(callback);

//LEEK
LeekApi.Leek.addChip(leekId, chipId, callback);
LeekApi.Leek.addWeapon(leekId, weaponId, callback);
LeekApi.Leek.create(name, callback);
LeekApi.Leek.deleteRegister(leekId, key, callback);
LeekApi.Leek.get(leekId, callback);
LeekApi.Leek.count(callback);
LeekApi.Leek.getImage(leekId, scale, callback);
LeekApi.Leek.getLevelPopup(leekId, callback);
LeekApi.Leek.getNextPrice(callback);
LeekApi.Leek.getPrivate(leekId, callback);
LeekApi.Leek.getRegisters(leekId, callback);
LeekApi.Leek.registerTournament(leekId, callback);
LeekApi.Leek.removeAi(leekId, callback);
LeekApi.Leek.removeChip(chipId, callback);
LeekApi.Leek.removeHat(leekId, callback);
LeekApi.Leek.removeWeapon(weaponId, callback);
LeekApi.Leek.renameCrystals(leekId, newName, callback);
LeekApi.Leek.renameHabs(leekId, newName, callback);
LeekApi.Leek.setAi(leekId, aiId, callback);
LeekApi.Leek.setHat(leekId, hatId, callback);
LeekApi.Leek.setInGarden(leekId, inGarden, callback);
LeekApi.Leek.setPopupLevelSeen(leekId, callback);
LeekApi.Leek.setRegister(leekId, key, value, callback);
LeekApi.Leek.spendCapital(leekId, characteristics, callback);
LeekApi.Leek.unregisterTournament(leekId, callback);
LeekApi.Leek.usePotion(leekId, potionId, callback);

//MARKET
LeekApi.Market.buyCrystals(itemId, callback);
LeekApi.Market.buyHabs(itemId, callback);
LeekApi.Market.getItemTemplates(callback);
LeekApi.Market.sellHabs(itemId, callback);

//MESSAGE
LeekApi.Message.createConversation(farmerId, message, callback);
LeekApi.Message.getLatestConversations(count, callback);
LeekApi.Message.getMessages(conversationId, count, page, callback);
LeekApi.Message.quitConversation(conversationId, callback);
LeekApi.Message.sendMessage(conversationId, message, callback);

//NOTIFICATION
LeekApi.Notification.getLatest(count, callback);
LeekApi.Notification.readAll(callback);

//POTION
LeekApi.Potion.getAll(count, callback);

//RANKING
LeekApi.Ranking.fun(callback);
LeekApi.Ranking.get(category, order, page, callback);
LeekApi.Ranking.getFarmerRank(farmerId, order, callback);
LeekApi.Ranking.getHomeRank(callback);
LeekApi.Ranking.getLeekRank(leekId, order, callback);
LeekApi.Ranking.getTeamRank(teamId, order, callback);
LeekApi.Ranking.search(query, inLeeks, inFarmers, inTeams, callback);

//SERVICE
LeekApi.Service.getAll(callback);

//SUMMON
LeekApi.Summon.getTemplates(callback);

//TEAM
LeekApi.Team.acceptCandidacy(candidacyId, callback);
LeekApi.Team.ban(farmerId, callback);
LeekApi.Team.cancelCandidacy(callback);
LeekApi.Team.cancelCandidacyForTeam(teamId, callback);
LeekApi.Team.changeDescription(description, callback);
LeekApi.Team.changeMemberGrade(farmerId, newGrade, callback);
LeekApi.Team.changeOwner(farmerId, password, callback);
LeekApi.Team.create(teamName, callback);
LeekApi.Team.createComposition(compositionName, callback);
LeekApi.Team.deleteComposition(compositionId, callback);
LeekApi.Team.dissolve(callback);
LeekApi.Team.get(teamId, callback);
LeekApi.Team.getConnected(teamId, callback);
LeekApi.Team.getPrivate(teamId, callback);
LeekApi.Team.moveLeek(leekId, compositionId, callback);
LeekApi.Team.quit(callback);
LeekApi.Team.registerTournament(compositionId, callback);
LeekApi.Team.rejectCandidacy(candidacyId, callback);
LeekApi.Team.sendCandidacy(teamId, callback);
LeekApi.Team.setEmblem(teamId, emblem, callback);
LeekApi.Team.setOpened(opened, callback);
LeekApi.Team.unregisterTournament(compositionId, callback);

//TOKEN
LeekApi.Token.check(callback);

//TOURNAMENT
LeekApi.Tournament.comment(tournamentId, comment, callback);
LeekApi.Tournament.get(tournamentId, callback);

//TROPHY
LeekApi.Trophy.getAdmin(lang, supertoken, callback);
LeekApi.Trophy.getAll(callback);
LeekApi.Trophy.getCategories(callback);
LeekApi.Trophy.getFarmerTrophies(callback);
LeekApi.Trophy.unlock(trophyId, callback);

//WEAPON
LeekApi.Weapon.getAll(callback);
LeekApi.Weapon.getTemplates(callback);
```


### TODO
- Write more tests
- Write more documentation

### LICENSE
MIT

[npm-image]: https://img.shields.io/npm/v/leek-api.svg
[npm-url]: https://npmjs.org/package/leek-api
