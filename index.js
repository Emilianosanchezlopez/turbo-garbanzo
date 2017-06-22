var express = require('express');
// var azure = require('azure-storage');

// var tableService = azure.createTableService();
// tableService.createTableIfNotExists('mytable', function(error, result, response) {
//   if (!error) {
//     // result contains true if created; false if already exists
//   }
// });
var app = express();
var port = 5000;
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
   res.send("Hello from npm start");
 });
app.get('/books', function (req, res) {
   res.send("Hello from Books");
 });

app.listen(5000, function (err) {
  console.log('I\'am running on port '+ port);
});