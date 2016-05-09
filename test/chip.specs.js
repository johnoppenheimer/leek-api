var api = require('./api');
var expect = require('chai').expect;

describe('api', function () {

  describe('#chip', function () {

    it('should return a list of chip ids', function (done) {
      api.Chip.getAll(function (error, result) {
        expect(error).to.not.be.ok;
        expect(result).to.be.ok;
        done();
      });
    });

    it('should return a list of templates chip', function(done){
        api.Chip.getTemplates(function(err, res){
            expect(err).to.not.be.ok;
            expect(res).to.be.ok;
            done();
        });
    });
  });
});
