var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var router = express.Router();
var app = express();

var users_route = require('./api/users');
var orgs_route = require('./api/orgs');
var cart_route = require('./api/cart');

app.use(express.static(__dirname + '/client'));

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use('/', router);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Accept', 'application/vnd.github.v3+json');
    next();
});

app.use('/cart', cart_route);
app.use('/users', users_route);
app.use('/orgs', orgs_route);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.route('/').get(function(req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

var server = app.listen(process.env.PORT || 3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at port %s ...', port);
});
