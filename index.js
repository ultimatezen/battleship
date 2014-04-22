var fs = require('fs');
var config = require('config');
var koa = require('koa');
var routing = require('koa-routing');
var app = koa();


app.use(function *(next) {
    this.res.type = 'application/json';
    this.body = {};
    yield next;
});

app.use(routing(app));


// Setup apis
var apiPath = './routes';
var files = fs.readdirSync(apiPath);
files.forEach(function (file) {
    if (file.indexOf('.swp') === -1) {
        require(apiPath + '/' + file).setup(app);
    }
});


console.log('Setup complete');

app.listen(config.server.port);
console.log('Listening on port ' + config.server.port)
