var express = require('express');

var app = express();
app.use(express.static('public'));
app.use(express.static('src/views'));

// app.get('/', function (req, res) {
//    res.send("Hello from npm start");
//  });
// app.get('/books', function (req, res) {
//    res.send("Hello from Books");
//  });

var port = process.env.PORT || 5000;
app.listen(port, function (err) {
  console.log('I\'am running on port '+ port);
});