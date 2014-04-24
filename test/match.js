var should = require('should');
var tv4 = require('tv4');


describe('Matches', function () {
    var matchModule = require('../modules/match');
    var matchResponse = require('../schemas/match.json');

    should(true).equal(true);
    beforeEach(function () {
        matchModule.clearMatches();
    });


    it('should create a new match', function () {
        var response = matchModule.createMatch();
        var matches = matchModule.getMatches();
        var validated = tv4.validate(response, matchResponse.match);

        matches.length.should.be.above(0);
        response.should.eql(matches[0]);
        validated.should.equal(true);
    });


    it('should list all matches', function () {
        matchModule.createMatch();
        matchModule.createMatch();
        matchModule.createMatch();

        var matches = matchModule.getMatches();
        var validated = tv4.validate(matches, matchResponse.matches);

        matches.length.should.equal(3);
        validated.should.equal(true);
    });
});
