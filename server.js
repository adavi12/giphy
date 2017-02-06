var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fav = require('./routes/fav');
var index = require('./routes/index');
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/fav', fav);
app.use('/', index);
// app.use('/*', index);

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server listening on port', server.address().port);
});
