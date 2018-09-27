var path = require('path');
var express = require('express');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/view', function(req, res) {
  res.render('index', {name:'kyle'})
})

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
