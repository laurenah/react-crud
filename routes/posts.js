var express = require('express');
var router = express.Router();
var connection = require('../db');

/* GET blog posts listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * from post', (err, results, fields) => {
    if (err) throw err;
    res.send(JSON.stringify(results));
  });
});

module.exports = router;
