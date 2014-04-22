/*
 * Match route handlers
 *
 *
 */


function setup(app) {
    app.route('/match')
        .get(get)
        .post(post);
}


function * get(next) {
    this.body = { data: 'qwesssome' };
    yield next;
}


function * post(next) {
    yield next;
}


exports.setup = setup;
exports.get = get;
exports.post = post;
