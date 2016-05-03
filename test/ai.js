var api = require('./api');
var expect = require('chai').expect;

describe('api', function() {

    describe('#ai', function() {
        var aiId = 0;
        var aiName = 'a_saltyAI'

        it('should create a new ai', function(done) {
            api.Ai.new(function(error, result) {
                expect(error).to.not.be.ok;
                expect(result).to.be.ok;
                aiId = result.ai.id;

                done();
            });
        });

        it('should rename the created AI in ' + aiName, function(done){
            api.Ai.rename(aiId, aiName, function(error, result){
                expect(error).to.not.be.ok;
                expect(result).to.be.ok;
                done();
            })
        })

        it('should return the newly created AI', function(done) {
            api.Ai.get(aiId, function(error, result) {
                expect(error).to.not.be.ok;
                expect(result).to.be.ok;
                expect(result.ai.name).to.equal(aiName);
                done();
            });
        });

        it('should delete the newly created AI', function(done){
            api.Ai.delete(aiId, function(error, result){
                expect(error).to.not.be.ok;
                expect(result).to.be.ok;
                done();
            });
        });

        it('should return the AIs without the previously created AI', function(done) {
            api.Ai.getMyAis(function(err, res) {
                expect(err).to.not.be.ok;
                expect(res).to.be.ok;
                expect(res.ais[0]).to.not.have.property('name', aiName);
                done();
            });
        });
    });
});
