var api = require('./api');
var expect = require('char').expect;

describe('api', function(){
    describe('#farmer', function(){
        var farmerID = 0;
        var farmerCountry = '';

        it('should get user from current token', function(){
            api.Farmer.getFromCurrentToken(function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                //TODO: check if object is right;
                farmerID = res.farmer.id;
                farmerCountry = res.farmer.country;

                done();
            });
        });

        it('should change country to U.S', function(){
            api.Farmer.changeCountry('us', function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;

                done();
            });
        });

        it('should change country back to farmer\'s one', function(){
            api.Farmer.changeCountry(farmerCountry, function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                done();
            });
        });

        it('should register to tournament', function(){
            api.Farmer.registerTournament(function(err, res)(
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                done();
            ));
        });

        it('should unregister to tournament', function(){
            api.Farmer.unregisterTournament(function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                done();
            });
        });

        it('should get connected farmers', function(){
            api.Farmer.getConnected(function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                //TODO: add expect array
                done();
            });
        });

        it('should get users with ID ' + farmerID, function(){
            api.Farmer.get(farmerID, function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                done();
            });
        });

        it('should update farmer', function(){
            api.Farmer.update(function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                done();
            });
        });
    });
});
