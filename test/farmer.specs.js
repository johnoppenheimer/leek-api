var api = require('./api');
var expect = require('chai').expect;

describe('api', function(){
    describe('#farmer', function(){
        var farmerID = 0;
        var farmerCountry = '';

        it('should get user from current token', function(done){
            api.Farmer.getFromCurrentToken(function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                farmerID = res.farmer.id;
                farmerCountry = res.farmer.country;

                done();
            });
        });

        it('should change country to U.S', function(done){
            api.Farmer.changeCountry('us', function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;

                done();
            });
        });

        it('should change country back to farmer\'s one', function(done){
            api.Farmer.changeCountry(farmerCountry, function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                done();
            });
        });

        it('should register to tournament', function(done){
            api.Farmer.registerTournament(function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                done();
            });
        });

        it('should unregister to tournament', function(done){
            api.Farmer.unregisterTournament(function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                done();
            });
        });

        it('should get connected farmers', function(done){
            api.Farmer.getConnected(function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                expect(res.farmers).to.be.a('array');
                done();
            });
        });

        it('should get current user with ID', function(done){
            api.Farmer.get(farmerID, function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                expect(res.farmer.id).to.equal(farmerID);
                expect(res.farmer.country).to.equal(farmerCountry);

                done();
            });
        });

        it('should update farmer', function(done){
            api.Farmer.update(function(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                done();
            });
        });
    });
});
