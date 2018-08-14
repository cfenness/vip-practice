var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vipdb"
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
