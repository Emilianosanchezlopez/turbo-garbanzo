var azure = require('azure-storage');

var tableService = azure.createTableService();
tableService.createTableIfNotExists('mytable', function(error, result, response) {
  if (!error) {
    // result contains true if created; false if already exists
  }
});