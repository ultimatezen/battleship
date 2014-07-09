/*
 * Match module
 *
 *
 */

var matches = [];


// Returns and empty match
function newMatch() {
    var id = matches.length;

    return {
        id: id,
        name: 'Match ' + id,
        player1: null,
        player2: null
    };
}


// Get all matches
function getMatches() {
    return matches;
}


// Create an empty match
function createMatch() {
    var match = newMatch();
    matches.push(match);
    return match;
}


// Clear all matches
function clearMatches() {
    matches = [];
}


function setup(app) {
    function * get(next) {
        this.body.matches = exports.getMatches();
        yield next;
    }

    function * post(next) {
        this.body.match  = exports.createMatch();
        this.body.matches = exports.getMatches();
        yield next;
    }

    app.route('/match')
        .get(get)
        .post(post);
}

exports.setup = setup;
exports.getMatches = getMatches;
exports.createMatch = createMatch;
exports.clearMatches = clearMatches;
