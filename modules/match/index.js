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


exports.getMatches = getMatches;
exports.createMatch = createMatch;
exports.clearMatches = clearMatches;
