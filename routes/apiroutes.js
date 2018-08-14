var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "b4fc3b838b03b3",
  password: "b032b96e",
  database: "heroku_d4967fa2661e836"
});


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Request
  // ---------------------------------------------------------------------------
  app.get('/jsondata', function (req, res) {
    connection.query('SELECT * from customers', function (error, results, fields) {
      if (error) throw error;
      res.json(results);
      console.log(results[1].type);
    });
  });

  app.get('/supplierdata', function (req, res) {
    connection.query('SELECT * FROM customers WHERE invoiceDate BETWEEN >= 2017-09-15 and 2017-09-30', function (error, results, fields) {
      if (error) throw error;
      res.json(results);
      console.log(results[1].supplier);
    });
  });

};
