var api = require('./api');
var expect = require('chai').expect;

describe('api', function(){
    describe('#fight', function(){
        var fightID = 17261730;

        it('should get fight with ID ' + fightID, function(){
            api.Fight.get(fightID, function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                done();
            });
        });

        it('should get fight logs with ID ' + fightID, function(){
            api.Fight.getLogs(fightID, function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                done();
            });
        });
    });
});
