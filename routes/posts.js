var express = require('express');
var router = express.Router();
var connection = require('../db');

/* GET blog posts listing. */
router.get('/', (req, res, next) => {
  connection.query('SELECT * from posts', (err, results, fields) => {
    if (err) throw err;
    res.send(JSON.stringify(results));
  });
});

// POST blog post
router.post('/', (req, res) => {
  var blog = req.body;
  connection.query(`INSERT INTO posts (title, content) VALUES ("${blog.title}", "${blog.content}")`, (err, results) => {
    if (err) throw err;
  })
});

// DELETE a blog post
router.delete('/', (req, res) => {
  var id = req.body.id;
  connection.query(`DELETE FROM posts WHERE id=${id}`, (err, results) => {
    if (err) throw err;
  })
});

module.exports = router;
