var api = require('./api');
var expect = require('chai').expect;

describe('api', function () {

  describe('#changelog', function () {

    it('should return a list of changelog', function (done) {
      api.Changelog.get('fr', function (error, result) {
        expect(error).to.not.be.ok;
        expect(result).to.be.ok;
        done();
      });
    });

    it('should return the last changelog', function(done){
        api.Changelog.getLast('fr', function(err, res){
            expect(err).to.not.be.ok;
            expect(res).to.be.ok;
            done();
        });
    });
  });
});
