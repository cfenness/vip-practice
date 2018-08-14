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
    connection.query('select supplier from customers', function (error, results, fields) {
      if (error) throw error;
      res.json(results);
      console.log(results[1].supplier);
    });
  });

};
