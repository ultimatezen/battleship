/*
 * Match route handlers
 *
 */


var match = require('../modules/match');
function setup(app) {
    app.route('/match')
        .get(get)
        .post(post);
}


function * get(next) {
    this.body.matches = match.getMatches();
    yield next;
}


function * post(next) {
    this.body.match  = match.createMatch();
    this.body.matches = match.getMatches();
    yield next;
}




exports.get = get;
exports.post = post;
exports.setup = setup;
